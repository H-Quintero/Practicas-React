import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleComments from "../SingleComments/SingleComments";

export default function Comments() {
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((data) => data.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <div>
      {comments.map((data) => (         
        <SingleComments  key={data.id} comment={data} />
      ))}
    </div>
  );
}
