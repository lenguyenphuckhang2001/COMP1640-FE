import { useState, useEffect } from 'react';
import './Statistical.scss';
export const Statistical = () => {
  const [mostLikedPost, setMostLikedPost] = useState({});
  const [mostCommentedPost, setMostCommentedPost] = useState({});

  useEffect(() => {
    fetch('https://example.com/posts/most-liked')
      .then((response) => response.json())
      .then((data) => setMostLikedPost(data));

    fetch('https://example.com/posts/most-commented')
      .then((response) => response.json())
      .then((data) => setMostCommentedPost(data));
  }, []);

  return (
    <div className='statistical'>
      <h2>Statistics</h2>
      <p>Most liked post: {mostLikedPost.title}</p>
      <p>Likes: {mostLikedPost.likes}</p>
      <p>Comments: {mostLikedPost.comments}</p>
      <p>Most commented post: {mostCommentedPost.title}</p>
      <p>Likes: {mostCommentedPost.likes}</p>
      <p>Comments: {mostCommentedPost.comments}</p>
    </div>
  );
};
