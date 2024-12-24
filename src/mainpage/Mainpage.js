import React, { useState, useEffect } from "react";
import DropDownMenu from "../dropdown-menu/Dropdown-menu";

function Mainpage() {
  const [retrievedData, setRetrievedData] = useState([]);
  const [characterData, setCharacterData] = useState([]);

  const testObject = [
    { title: "test title 1", content: "...1" },
    { title: "test title 2", content: "...2" },
    { title: "test title 3", content: "...3" },
    { title: "test title 4", content: "...4" },
    { title: "test title 5", content: "...5" },
    { title: "test title 6", content: "...6" },
  ];

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

  //   console.log(retrievedData);

  return (
    <div class="container">
      <div class="row">
        {retrievedData.map((el) => (
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
      <DropDownMenu characterList={retrievedData} />
    </div>
  );
}

export default Mainpage;
