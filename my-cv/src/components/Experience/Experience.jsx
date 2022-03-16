import React from 'react'

export default function Experience({ experience }) {
  return (
    <div>
      <h2>Experience</h2>
      {experience.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <div className='experience-container'>
              <h3>{item.name}</h3>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
