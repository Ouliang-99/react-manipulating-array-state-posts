import { useState } from "react";
import { postData } from "../data/posts";

function Posts() {
  const [postList, setPostList] = useState(postData);
  const increaseLike = (id) => {
    const newPostList = postList.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPostList(newPostList);
  };
  const decreaseLike = (id) => {
    const newPostList = postList.map((post) =>
      post.id === id && post.likes > 0
        ? { ...post, likes: post.likes - 1 }
        : post
    );
    setPostList(newPostList);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postList.map((post) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => increaseLike(post.id)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => decreaseLike(post.id)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
