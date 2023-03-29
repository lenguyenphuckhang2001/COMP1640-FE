import React from 'react';
import './PostDetail.scss';
import { BsFillCaretUpFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/Bs';

export const PostDetail = ({ post }) => {
  return (
    <div className='MainPost'>
      <div className='postcontent'>
        <div className='title'>
          <h2>{post?.title}</h2>
        </div>
        <div className='postdost'>
          <span className='upvote'>
            <BsFillCaretUpFill />
          </span>
          <span>{post.votes}</span>
          <span className='downvote'>
            <BsFillCaretDownFill />
          </span>
          <span>
            <BsBookmark />
          </span>
        </div>
        <div className='infopost'>
          <p>Create At: {post.createdAt}</p>
          <p>Modified At: {post.updatedAt}</p>
        </div>
        <div className='post'>
          <p>{post.content}</p>
          <div className='user-post'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>{post?.author?.username || 'Anonymus'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
