import React from "react";
import Land from "../land";
import Search from "../search";

const HomeMain = () => {
  const LandList = [
    { id: 1, name: "tekirdag" },
    { id: 2, name: "ankara" },
    { id: 3, name: "edirne" },
  ];

  return (
    <div className="flex flex-col">
      <Search />

      {LandList.map((item: any) => (
        <Land id={item.id} name={item.name} key={item.id} />
      ))}


    </div>
  );
};

export default HomeMain;
