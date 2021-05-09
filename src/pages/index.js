import React, { useState, useEffect } from "react"
const Home = () => {
  const [luaString, setLuaString] = useState([])

  useEffect(() => {
    let newJ = []

    let key = {
      0: "name",
      1: "rank",
      2: "rankIndex",
      3: "level",
      4: "Class",
      5: "zone",
      6: "note",
      7: "officerNote",
      8: "online",
      9: "status",
      10: "classFileName",
      11: "achievementPoint",
      12: "achievementRank",
      13: "isMobile",
      14: "isSoREligible",
      15: "standingID",
      16: "playerID",
    }

    fetch("./AbomNotes.lua")
      .then(response => response.text())
      .then(text => {
        let textProccessed = text
          .replace(/\[(.*)\]\s\=\s/g, "$1:") // change equal to colon & remove outer brackets
          .replace(/[\t\r\n]/g, "") // remove tabs & returns
          .replace(/\}\,\s--\s\[\d+\]\}/g, "]]") // replace sets ending with a comment with square brackets
          .replace(/\,\s--\s\[\d+\]/g, ",") // remove close subgroup and comment
          .replace(/,(\}|\])/g, "$1") // remove trailing comma
          .replace(/\}\,\{/g, "],[") // replace curly bracket set with square brackets
          .replace(/\{\{/g, "[[") // change double curlies to square brackets
          .replace(/,\bnil\b,/g, ',"",')
          .replace(/Notes\s\=/, "")

        var array = JSON.parse(textProccessed)
        // console.log(array)

        for (let i = 0; i < array.length; i++) {
          let dic = {}

          for (let j = 0; j < array[i].length; j++) {
            dic[key[j]] = array[i][j]
          }
          newJ.push(dic)
        }

        console.log(newJ)

        setLuaString(newJ)
      })
  }, [])

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "100px auto",
        backgroundColor: "lightgrey",
        minHeight: 600,
      }}
    >
      <div>
        {/* <button onClick={onLoad}>Click</button> */}
        <pre>{JSON.stringify(luaString, null, 4)}</pre>
        {/* {console.log(luaString)} */}
        {/* <ul>
        {luaString?.map(((v, index) => (
          <li key={index}>
            <div className="wrapper">
              <div className="name">
                {v[0]}
              </div>
              <div className="note">
                {v[6]}
              </div>
              <div className="note">
                {v[16]}
              </div>
            </div>
          </li>)
        ))}
      </ul> */}
      </div>
    </div>
  )
}

export default Home
