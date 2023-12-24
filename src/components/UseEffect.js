import { useState, useEffect } from "react";

const UseEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error(error.message));
  }, []);

  console.log(posts);

  return (
    <div>
      {/* useEffect
      {data && <h1>{data.title}</h1>} */}
    </div>
  );
};

export default UseEffect;
