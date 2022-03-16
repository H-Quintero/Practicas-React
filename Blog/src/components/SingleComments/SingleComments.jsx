import React from "react";

export default function SingleComments({ comment: { name, email, body } }) {


  return (
    <div className="comment-container">
      <div>
        <h4 className="comment-container__name">{name}</h4>
        <p className="comment-container__data">{body}</p>
        <p className="comment-container__data">{email}</p>
      </div>
    </div>
  );
}
