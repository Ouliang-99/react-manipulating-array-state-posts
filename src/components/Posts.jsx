import { useState } from "react";
import { blogData } from "./data/data";

function Posts() {
  const [cardList, setCardList] = useState(blogData);
  const cardLike = (cardIndex) => {
    const newLikeList = [...cardList];
    newLikeList[cardIndex].likes += 1;
    setCardList(newLikeList);
  };
  const cardDisLike = (cardIndex) => {
    const newLikeList = [...cardList];
    if (newLikeList[cardIndex].likes > 0) {
      newLikeList[cardIndex].likes -= 1;
      setCardList(newLikeList);
    } else {
      newLikeList[cardIndex].likes += 0;
      setCardList(newLikeList);
    }
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {cardList.map((data, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>Post Title #{data.id}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{data.likes}</span>
                </div>
              </div>
              <p className="post-content">{data.content}</p>
              <div className="post-actions">
                <button onClick={() => cardLike(index)} className="like-button">
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => cardDisLike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
