import React from "react";
import Land from "../land";
import Search from "../search";

const HomeMain = () => {
  const LandList = [
    { id: 1, location: "Tekirdag",customer:"2", name:"Sahibinden satılık 3+1" },
    { id: 2, location: "Ankara" ,customer:"4" , name:"Sahibinden satılık 3+1" },
    { id: 3, location: "Edirne" ,customer:"6" , name:"Sahibinden satılık 3+1" },
    { id: 4, location: "İstanbul",customer:"5" , name:"Sahibinden satılık 3+1" },
    { id: 5, location: "İzmir" ,customer:"3" , name:"Sahibinden satılık 3+1" },
  ];

  return (
    <div className="flex flex-col w-full  ">
      <Search />
      <div className="grid grid-cols-4 gap-4 ml-5 max-sm:grid-cols-2 ">
        {LandList.map((item: any) => (
          <Land id={item.id} location={item.location} customer={item.customer} name={item.name} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeMain;
