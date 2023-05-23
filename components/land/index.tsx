import React from "react";

type Props = {
  id: string;
  location: string;
  customer: string;
  name: string;
};

const Land: React.FC<Props> = ({ id, location, customer, name }) => {
  return (
    <div className="rounded-lg flex flex-col  border-4 mt-4 border-blue-500  ">
   <span className="font-semibold flex justify-center "> {name}</span> 
      Lokasyon: {location} <br/>
      Müşteri sayısı: {customer}
    </div>
  );
};

export default Land;
