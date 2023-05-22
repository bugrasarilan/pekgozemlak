import React from "react";

type Props = {
  id: string;
  name: string;
};

const Land: React.FC<Props> = ({ id, name }) => {
  return <div>{name}</div>;
};

export default Land;
