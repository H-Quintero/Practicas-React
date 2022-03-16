import React from "react";

export default function More({ languages, habilities, volunteer }) {
  return (
    <>
      <h2 className="title">Languages</h2>
      <div className="languages">
        <h3 className="languages__title">{languages.language}</h3>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
      </div>
      <h2 className="title">Habilities</h2>
      <div className="habilities">
        {habilities.map((item) => {
          return <p key={JSON.stringify(item)}>{item}</p>;
        })}
      </div>
      <h2 className="title">Volunteer</h2>
      <div className="volunteer">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="languages__title">{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
