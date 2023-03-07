import React, { useRef, useState,useMemo } from 'react';
import './Answerpost.scss';
import { RxFontBold, RxFontItalic } from 'react-icons/Rx';
import { BsLink, BsCardImage } from 'react-icons/Bs';
import JoditEditor from "jodit-react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
      <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
    </div>
  );
};
