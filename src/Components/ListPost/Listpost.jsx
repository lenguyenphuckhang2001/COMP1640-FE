import React from 'react';
import './Listpost.scss';
import { Col } from 'react-bootstrap';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/Bs';
import { CgComment } from 'react-icons/Cg';
import { FiShare2 } from 'react-icons/Fi';
import { MdSaveAlt } from 'react-icons/Md';
export const ListPost = () => {
  return (
      <Col md={{ span: 6 }}>
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>0 votes</span>
              <span>200 view</span>
              <span className='downvote'>0 answers</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Khoa</h4>
              <h2 className='title-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>0 votes</span>
              <span>200 view</span>
              <span className='downvote'>0 answers</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Khoa</h4>
              <h2 className='title-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>0 votes</span>
              <span>200 view</span>
              <span className='downvote'>0 answers</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Khoa</h4>
              <h2 className='title-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>0 votes</span>
              <span>200 view</span>
              <span className='downvote'>0 answers</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Khoa</h4>
              <h2 className='title-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>0 votes</span>
              <span>200 view</span>
              <span className='downvote'>0 answers</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Khoa</h4>
              <h2 className='title-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
  );
};
