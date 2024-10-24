import { useState } from "react";
import { data } from "../data/data";

function Posts() {
  const [postContainers, setPostContainer] = useState(data);

  const addLike = (postId) => {
    const newPostContainer = [...postContainers];
    newPostContainer[postId].likes = newPostContainer[postId].likes + 1;
    setPostContainer(newPostContainer);
  };

  const disLike = (postId) => {
    const newPostContainer = [...postContainers];
    if (postContainers[postId].likes > 0) {
      newPostContainer[postId].likes = newPostContainer[postId].likes + -1;
      setPostContainer(newPostContainer);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postContainers.map((post) => (
          <div key={post.id} class="post-item">
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button onClick={() => addLike(post.id-1)} class="like-button">
                Like
              </button>
              <button onClick={() => disLike(post.id-1)} class="dislike-button">
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
