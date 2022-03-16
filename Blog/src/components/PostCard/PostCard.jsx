import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ blog: { id, title, userId, body } }) {
  return (
    <Link to={`/singlePost/${id}`} className="link">
      <div key={id} className="blog">
        <img 
          className="blog__img"
          src="https://i.blogs.es/202202/cascadas/450_1000.jpeg" alt="imagen"/>
        <h4 className="blog__title">{title}</h4>
        <p className="blog__body">{body}</p>
        <h5 className="blog__user">Escrito por: {userId}</h5>
      </div>
    </Link>
  );
}
