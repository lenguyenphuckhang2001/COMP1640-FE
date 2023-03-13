import React from 'react';
import "./PostDetail.scss"
import { BsFillCaretUpFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/Bs';

export const PostDetail = () => {
  return (
    <div className='MainPost'>
        <div className='postcontent'>
            <div className='title'><h2>The Greates Anime Ever</h2></div>
            <div className='postdost'>
                <span className='upvote'>
                  <BsFillCaretUpFill />
                </span>
                <span>200</span>
                <span className='downvote'>
                  <BsFillCaretDownFill />
                </span>
                <span>
                <BsBookmark/>
                </span>
              
            </div>
            <div className='infopost'>
                <p>Create At: 10/1/2021</p>
                <p>Modified At: 20/1/2021</p>
            </div>
            <div className='post'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='user-post'>
                  <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'/>
                  <p>Khoa</p>
                </div>
            </div>
        </div>
    </div>
  )
};
