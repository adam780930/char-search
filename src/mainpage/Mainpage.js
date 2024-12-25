import React, { useState, useEffect } from "react";
import DropDownMenu from "../dropdown-menu/Dropdown-menu";

function Mainpage() {
  const [retrievedData, setRetrievedData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
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

  const handleSelectedCharacter = (data) => {
    setSelectedCharacter(data);
    fetch(`https://genshin.jmp.blue/characters/${data}`)
      .then((result) => result.json())
      .then((data) => {
        setfetchedCharacter([data]);
      });
  };

  return (
    <div class="container">
      <div class="row">
        {fetchedCharacter.map((el) => (
          <div class="text-center border border-primary m-1 p-1 col-2">
            <p class="h4 bg-primary">{getKeyByValue(el, el.name)}</p>
            <p class="h4">{el.name}</p>
            <p class="h4">{el.vision}</p>
            <p class="h4">{el.vision}</p>
            <p class="h4">{el.vision}</p>
            <p class="h4">{el.vision}</p>
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
