import React, { useRef, useState,useMemo } from 'react';
import './Answerpost.scss';
import { RxFontBold, RxFontItalic } from 'react-icons/Rx';
import { BsLink, BsCardImage } from 'react-icons/Bs';
import JoditEditor from "jodit-react";


export const Answerpost = () => {
  return (
    <div className='answer-form'>
    <h4>Your Answer</h4>
      {/* <form className='post-a-form'>
        <div className='dost'>
          <div className='change-style'>
            <span>
              <RxFontBold />
            </span>
            <span>
              <RxFontItalic />
            </span>
          </div>
          <div className='post-file'>
            <span>
              <BsLink />
            </span>
            <span>
              <BsCardImage />
            </span>
          </div>
        </div>
        <textarea placeholder="Enter your summary of poem"/>
        <button>Submit</button>
      </form> */}

    </div>
  );
};
