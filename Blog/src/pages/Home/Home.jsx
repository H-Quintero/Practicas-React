
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <main className="hero">
        <h1 className="hero__title">Mi Primer Blog</h1>
      </main>
      <div className="blogs-container">
        {blogs.map((blog) => {
          console.log(blog)
          return (
            <PostCard 
              key={blog.id}
              blog={blog}
            />
          );
        })}
      </div>
    </div>
  );
}
