import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";

export default function SinglePost() {
  const [postInfo, setPostInfo] = useState({
    title: "",
    userId: "",
    body: "",
  });

  const { postId } = useParams();
  console.log(postId)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((data) => data.json())
      .then((data) => setPostInfo(data)); 
  }, [postId]);

  const { title, userId, body } = postInfo;

  return (
    <div className="post-container">
      <h2 className="post-container__title">{ title }</h2>
      <p className="post-container__data">{ body }</p>
      <p className="post-container__data">Escrito por: { userId }</p>

      <Comments />
    </div>
  );
}
