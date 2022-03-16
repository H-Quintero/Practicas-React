import React from "react";

export default function About({ hero }) {
  const { aboutMe } = hero;

  return (
    <div className="card">
      {aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
}
