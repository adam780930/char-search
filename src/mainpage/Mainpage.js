import React, { useState, useEffect } from "react";

function Mainpage() {
  const [retrievedData, setRetrievedData] = useState([]);

  const testObject = [
    { title: "test title 1", content: "...1" },
    { title: "test title 2", content: "...2" },
    { title: "test title 3", content: "...3" },
    { title: "test title 4", content: "...4" },
    { title: "test title 5", content: "...5" },
    { title: "test title 6", content: "...6" },
  ];

  useEffect(() => {
    fetch(`https://genshin.jmp.blue/characters/amber`)
      .then((result) => result.json())
      .then((data) => {
        setRetrievedData([data]);
        console.log(data);
      });
  }, []);

  //   const getInfo = async () => {
  //     await fetch(`https://genshin.jmp.blue/characters/amber`)
  //       .then((result) => result.json())
  //       .then((data) => {
  //         setRetrievedData(data);
  //         console.log(data)
  //       });
  //   };

  //   getInfo();

  return (
    // <div>
    //   <div class="text-center border border-primary m-1 p-1 col-2">
    //     <p class="h4 bg-primary">title</p>
    //     <p class="h4">...</p>
    //   </div>
    //   <div>{testObject[0].title}</div>
    // </div>
    <div class="container">
      <div class="row">
        {retrievedData.map((el) => (
          <div class="text-center border border-primary m-1 p-1 col-2">
            <p class="h4 bg-primary">{el.name}</p>
            <p class="h4">{el.vision}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainpage;
