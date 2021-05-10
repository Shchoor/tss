const axios = require("axios")
const crypto = require("crypto")

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // fetch TSS guild roster
  const fetchRoster = () =>
    axios.get(
      `https://eu.api.blizzard.com/data/wow/guild/ravencrest/the-scarlet-scourge/roster?namespace=profile-eu&locale=en_US&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih`
    )

  // await for results
  const res = await fetchRoster()

  //loop members
  for (const key in res.data.members.slice(0, 10)) {
    let member = res.data.members[key]

    //fetch eatch member profile
    const fetchProfileByKey = () =>
      axios.get(
        `${member.character.key.href}&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih`
      )
    // await for results
    const resProfile = await fetchProfileByKey()

    const fetchUserMedia = () =>
      axios.get(
        `https://eu.api.blizzard.com/profile/wow/character/ravencrest/${member.character.name.toLowerCase()}/character-media?namespace=profile-eu&locale=en_US&access_token=USdQZU9dlUCiuuhNTOacwWKiZkrONalA1T`
      )

    const resMedia = await fetchUserMedia()

    // console.log(resMedia?.data?.assets[0]?.value)


    const userNode = {
      id: `${key}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TssMember`,
      },
      children: [],
      // Other fields that you want to query with graphQl
      name: member.character.name,
      level: member.character.level,
      spec: resProfile.data.active_spec?.name?.en_US,
      ilvl: resProfile.data.equipped_item_level,
      avatar: resMedia?.data?.assets[0]?.value
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`)
    userNode.internal.contentDigest = contentDigest

    createNode(userNode)

    await sleep(10)
  }

  // res.data.members.map(async (user, i) => {
  //   const fetchUserKey = () =>
  //     axios.get(
  //       `${user.character.key.href}&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih`
  //     )

  //   // await for results
  //   const resM = await fetchUserKey()

  //   console.log(resM.data.name)

  //   const userNode = {
  //     id: `${i}`,
  //     parent: `__SOURCE__`,
  //     internal: {
  //       type: `TssMember`,
  //     },
  //     children: [],
  //     // Other fields that you want to query with graphQl
  //     name: user.character.name,
  //     level: user.character.level,
  //     character: user.character,
  //     charKeyApi: {
  //       // name: resM.data.name,
  //       spec: resM.data.active_spec.name.en_US,
  //       ilvl: resM.data.equipped_item_level,
  //     },
  //   }

  //   // Get content digest of node. (Required field)
  //   const contentDigest = crypto
  //     .createHash(`md5`)
  //     .update(JSON.stringify(userNode))
  //     .digest(`hex`)
  //   // add it to userNode
  //   userNode.internal.contentDigest = contentDigest

  //   // Create node with the gatsby createNode() API
  //   createNode(userNode)
  // })

  return
}
