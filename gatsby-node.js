const axios = require("axios")
const crypto = require("crypto")
const fs = require("fs")

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

async function readStats(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, "utf8", function (err, stats) {
      if (err) {
        reject(err)
      }
      resolve(stats.mtime)
    })
  })
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  let notesFromFile = await readFile("./src/data/notes.json")
  let parsedJsonNotes = JSON.parse(notesFromFile)
  let dictionary = Object.assign(
    {},
    ...parsedJsonNotes.map(x => ({
      [x.name.replace("-Ravencrest", "")]: {
        name: x.name,
        note: x.note,
      },
    }))
  )

  let lastUpdated = await readStats("./src/data/notes.json")

  // fetch TSS guild roster
  const fetchRoster = () =>
    axios.get(
      `https://eu.api.blizzard.com/data/wow/guild/ravencrest/the-scarlet-scourge/roster?namespace=profile-eu&locale=en_US&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih`
    )
  const res = await fetchRoster()

  //loop members
  for (const key in res.data.members) {
    let member = res.data.members[key]

    try {
      const fetchProfileByKey = () =>
        axios.get(
          `${member.character.key.href}&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih`
        )
      const resProfile = await fetchProfileByKey()
      console.log(
        "_________________________________________________________________________________________________________________" +
          key
      )
      // console.log(member.character.name)

      // fetch eatch member profile
      const fetchUserMedia = () =>
        axios.get(
          `https://eu.api.blizzard.com/profile/wow/character/ravencrest/${member.character.name.toLowerCase()}/character-media?namespace=profile-eu&locale=en_US&access_token=US8quFnSY4m3Zq5kq6vuaTU0Jyn58SNpma`
        )
      const resMedia = await fetchUserMedia()

   

      const userNode = {
        id: `${key}`,
        parent: `__SOURCE__`,
        internal: {
          type: `TssMember`,
        },
        children: [],
        name: member.character.name,
        level: member.character.level,
        rank: member.rank,
        spec: resProfile.data.active_spec.name.en_US,
        ilvl: resProfile.data.equipped_item_level,
        classId: resProfile.data.character_class.id,
        specId: resProfile.data.active_spec.id,
        covenantId: resProfile.data.covenant_progress.chosen_covenant.id,
        avatar: resMedia.data.assets[0].value,
        note: dictionary[member.character.name].note,
        lastUpdated: lastUpdated
      }

      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(userNode))
        .digest(`hex`)
      userNode.internal.contentDigest = contentDigest

      createNode(userNode)
    } catch (error) {
      console.log(error)
    }

    await sleep(100)
  }

  return
}
