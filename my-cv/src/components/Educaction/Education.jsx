import React from "react";

export default function Education({ education }) {
  return (
    <div>
      <h2>Education</h2>
      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <div className="education-container">
              <h3 className="education-title">{item.name}</h3>
              <p>{item.date}</p>
              <p>{item.where}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
