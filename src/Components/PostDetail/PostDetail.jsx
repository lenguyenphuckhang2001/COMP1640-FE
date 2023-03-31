import React from 'react';
import './PostDetail.scss';
import { BsFillCaretUpFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/Bs';
import { useMutation, useQueryClient } from 'react-query';
import PostApi from '../../Api/PostApi';
import { useState } from 'react';

export const PostDetail = ({ post, postId }) => {
  const [voteCount, setVoteCount] = useState(() => post.votes);
  const [voteType, setVoteType] = useState(null);
  const queryClient = useQueryClient();

  const updateUpvotePost = useMutation({
    mutationFn: async (newTodo) => {
      const res = await PostApi.update(postId, newTodo);
      return res;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['post', postId]);
    },
  });

  const handleVote = (type) => {
    if (voteType === type) {
      // Clear vote if already voted
      setVoteType(type);
    } else {
      // Update vote if not already voted or switching votes
      setVoteCount((prevCount) => {
        updateUpvotePost.mutate({
          votes: prevCount + type - (voteType || 0),
        });
        return prevCount + type - (voteType || 0);
      });
      setVoteType(type);
    }
  };

  return (
    <div className='MainPost'>
      <div className='postcontent'>
        <div className='title'>
          <h2>{post?.title}</h2>
        </div>
        <div className='postdost'>
          <span
            className={`upvote ${voteType === 1 ? 'disblely' : ''}`}
            onClick={() => {
              handleVote(1);
            }}
          >
            <BsFillCaretUpFill />
          </span>
          <p
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            {voteCount}
          </p>
          <span
            className={`downvote ${voteType === -1 ? 'disblely' : ''}`}
            onClick={() => {
              handleVote(-1);
            }}
          >
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
