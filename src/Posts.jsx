import React,{useEffect,useState} from "react";
import axios from "axios";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.ir/users")
      .then((response) => setPosts(response.data));
  }, [props.name,]);

  return (
    <ul className>
      {props.name}
      {posts.map((post) => (
        <li  key={post.id}>
          <h4>{post.name}</h4>
          <p>{post.username}</p>
          <p>{post.email}</p>
          <p>{post.address.country}</p>
          <p>{post.address.geo.lat}</p>
        </li>
      ))}
    </ul>
  );
}

export default Posts;