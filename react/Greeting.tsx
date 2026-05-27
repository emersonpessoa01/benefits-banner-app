import React from "react";

type Props = {
  name: string;
  dataCustom?: string;
};

function Greeting({ name, dataCustom }: Props) {
  return (
    <div>
      <h1>Hey, {name}</h1>
      <p>Data: {dataCustom}</p>
    </div>
  );
}

export default Greeting;
