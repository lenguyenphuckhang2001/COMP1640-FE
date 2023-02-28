import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';

import './CreatePost.scss';



export const CreatePost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // You can send the form data to a server-side endpoint here
    console.log(formData);
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <div className='createpost'>
        <div className='center'>
          <form>
            <p className='title'> Create a post</p>
            <input className='ip_title' type='text' id='fname' name='fname' placeholder='Title' />
            <p className='question'>Question</p>
            <div className='text-icon'>
              <a className='icon' href='#'>
                <BiBold />
              </a>
              <a className='icon' href='#'>
                <BiItalic />
              </a>
              <a className='icon' href='#'>
                <BiUnderline />
              </a>
            </div>
            <input
              className='ip_question'
              type='text'
              id='fname'
              name='fname'
              placeholder='&#xf007;Write description'
            />
            
            
            <div className='UploadFile'>
              <p>File Upload</p>
              <input type='file' onChange={handleFileInputChange} />
              <button onClick={handleFileUpload}>Upload File</button>
            </div>
            <br />
            <div className='checkbox'>
              <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              <label>I agree to the terms</label>
            </div>


            <button className='bt_post'>Post</button>
          </form>
        </div>
      </div>
    </Col>
  );
};
