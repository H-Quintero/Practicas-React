import React from "react";
import AvButton from "../AvButton/AvButton";

export default function Avengers({ name, realName }) {
  return (
    <>
      <h1>Hoy soy {name} y mi nombre real es {realName}</h1>
      <AvButton 
        nombre={name}
      />
    </>
  );
}
