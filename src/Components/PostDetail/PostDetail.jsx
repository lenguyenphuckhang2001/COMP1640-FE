import React from 'react';
import "./PostDetail.scss"
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/Bs';
import {CiSaveDown2} from 'react-icons/Ci';
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
                <CiSaveDown2/>
                </span>
              
            </div>
            <div className='infopost'>
                <p>Create At: 10/1/2021</p>
                <p>Modified At: 20/1/2021</p>
            </div>
            <div className='post'>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                <div className='file'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU'/>
                </div>
                <ul className='tag'>
                  <li>#html</li>
                  <li>#reactjs</li>
                </ul>
            </div>
        </div>
    </div>
  )
};
