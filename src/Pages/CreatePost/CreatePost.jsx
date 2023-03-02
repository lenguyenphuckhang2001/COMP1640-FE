import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';

import './CreatePost.scss';

export const CreatePost = (props) => {
  // Set tag
  const [tags, setTags] = useState(props.tags || []);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const newTags = [...tags];
      newTags.push(inputValue.trim());
      setTags(newTags);
      setInputValue('');
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  //Set FileUpload
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Send the form data to a server-side endpoint to handle the file upload
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    console.log(await response.json());
  };

  const handleFileDownload = async () => {
    // Send a request to a server-side endpoint to download the file as a zip archive
    const response = await fetch('/api/download', {
      method: 'GET',
      responseType: 'blob',
    });

    // Create a URL for the downloaded file and open it in a new window
    const url = window.URL.createObjectURL(await response.blob());
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'download.zip');
    document.body.appendChild(link);
    link.click();
  };

  //Set checkbox

  const [selectedCheck, setSelectedCheck] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      {/* createpost content */}
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
              id='frame'
              name='frame'
              placeholder='&#xf007; Write description'
            />

            {/* Button UploadFile */}
            <div className='button_item'>
            <button className='upload_button' onClick={handleFileUpload}>
                  Upload File
                </button>
            </div>

            {/* Add Tag */}
            <div className='add-tag-input'>
            <div>
              <input
                type='text'
                placeholder='Add tag...'
                value={inputValue}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>
                    {tag}
                    <button onClick={() => handleRemoveTag(index)}>x</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            {/* function upload */}

            <div className='file-upload-and-download'>
              <h1 className='title'>File Upload and Download</h1>
              <div className='file-input'>
                <label htmlFor='file'>Choose a file:</label>
                <input type='file' id='file' onChange={handleFileInputChange} />
              </div>
              <div className='button-group'>
                <button className='upload-button' onClick={handleFileUpload}>
                  Upload File
                </button>
                <button className='download-button' onClick={handleFileDownload}>
                  Download File
                </button>
              </div>
            </div>
            <br />
            {/* function checkbox */}
            <div className='checkbox'>
              <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              <label>I agree to the terms</label>
            </div>
            {/* button */}
            <button className='bt_post'>Post</button>
          </form>
        </div>
      </div>
    </Col>
  );
};
