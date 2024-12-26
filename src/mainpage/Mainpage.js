import React, { useState, useEffect } from "react";
import DropDownMenu from "../dropdown-menu/Dropdown-menu";

function Mainpage() {
  const [retrievedData, setRetrievedData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [fetchedCharacter, setfetchedCharacter] = useState([]);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    fetch(`https://genshin.jmp.blue/characters`)
      .then((result) => result.json())
      .then((data) => {
        setRetrievedData(data);
      });
  }, []);

  const handleSelectedCharacter = (char) => {
    setSelectedCharacter(char);
    fetch(`https://genshin.jmp.blue/characters/${char}`)
      .then((result) => result.json())
      .then((data) => {

        console.log(data)
        setfetchedCharacter([data]);
      });
  };

  return (
    <div class="container">
      <div class="row">
        {fetchedCharacter.map((el) => (
          <div>
            <div class="container row">
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.name)}</p>
                <p class="h4">{el.name}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.vision)}</p>
                <p class="h4">{el.vision}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.weapon)}</p>
                <p class="h4">{el.weapon}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.nation)}</p>
                <p class="h4">{el.nation}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.affiliation)}</p>
                <p class="h4">{el.affiliation}</p>
              </div>
            </div>
            <div class="container row">
            <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.birthday)}</p>
                <p class="h4">{el.birthday}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.release)}</p>
                <p class="h4">{el.release}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.rarity)}</p>
                <p class="h4">{el.rarity}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.title)}</p>
                <p class="h4">{el.title}</p>
              </div>
              <div class="text-center border border-primary m-1 p-1 col-2">
                <p class="h4 bg-primary">{getKeyByValue(el, el.constellation)}</p>
                <p class="h4">{el.constellation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DropDownMenu
        characterList={retrievedData}
        onCharacterChange={handleSelectedCharacter}
      />
      {selectedCharacter && <p>Selected value: {selectedCharacter}</p>}
    </div>
  );
}

export default Mainpage;

//   const testObject = [
//     { title: "test title 1", content: "...1" },
//     { title: "test title 2", content: "...2" },
//     { title: "test title 3", content: "...3" },
//     { title: "test title 4", content: "...4" },
//     { title: "test title 5", content: "...5" },
//     { title: "test title 6", content: "...6" },
//   ];
