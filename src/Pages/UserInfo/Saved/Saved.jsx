import React from 'react';
import './Saved.scss';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export const Saved = () => {
  return (
    <div>
      <div className='posts'>
        <div className='icon'>
          <div className='up-icon'>
            <i class='fa-solid fa-caret-up'></i>
          </div>
          <p>100</p>
          <div className='down-icon'>
            <i class='fa-solid fa-caret-down'></i>
          </div>
        </div>
        <div className='p-1'>
          <div className='user'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>Khoa</p>
          </div>
          <div className='time'>
            <p>Create at: 10/1/2021</p>
            <p>Modified At: 20/1/2021</p>
          </div>
          <div className='content'>
            <p>The Greatest game ever</p>
          </div>
          <div className='tag'>
            <p>
              <b>#javascript</b>
            </p>
            <p>
              <b>#code</b>
            </p>
          </div>
          <div className='post-b'>
            <div className='comment'>
              <i class='fa-solid fa-comment'></i>
              <p>30 Comments</p>
            </div>
            <div className='share'>
              <i class='fa-solid fa-share'></i>
              <p>Share</p>
            </div>
            <div className='view'>
              <i class='fa-solid fa-eye'></i>
              <p>1.3k Views</p>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <div className='user'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>Khoa</p>
          </div>
          <div className='time'>
            <p>Create at: 10/1/2021</p>
            <p>Modified At: 20/1/2021</p>
          </div>
          <div className='content'>
            <p>The worst game ever</p>
          </div>
          <div className='tag'>
            <p>
              <b>#javascript</b>
            </p>
            <p>
              <b>#code</b>
            </p>
          </div>
          <div className='post-b'>
            <div className='comment'>
              <i class='fa-solid fa-comment'></i>
              <p>30 Comments</p>
            </div>
            <div className='share'>
              <i class='fa-solid fa-share'></i>
              <p>Share</p>
            </div>
            <div className='view'>
              <i class='fa-solid fa-eye'></i>
              <p>1.3k Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
