import React, { useRef, useState,useMemo } from 'react';
import './Answerpost.scss';
import { RxFontBold, RxFontItalic } from 'react-icons/Rx';
import { BsLink, BsCardImage } from 'react-icons/Bs';
import JoditEditor from 'jodit-react';


export const Answerpost = () => {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  console.log(content)
  return (
    <div className='answer-form'>
    <h4>Your Answer</h4>
    <JoditEditor
			ref={editor}
			value={content}
      config={{ theme: "dark" }}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		  />

      
    </div>
  );
};
