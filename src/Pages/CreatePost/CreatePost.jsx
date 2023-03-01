import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';

import './CreatePost.scss';

export const CreatePost = (props) => {

  
  // Set tag
  const [tags, setTags] = useState(props.tags || []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newTags = [...tags];
      newTags.push(inputValue.trim());
      setTags(newTags);
      setInputValue("");
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  //Set FileUpload
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // You can send the form data to a server-side endpoint here
    console.log(formData);
  };


  //Set checkbox

  const [selectedFile, setSelectedFile] = useState(null);
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
              id='fname'
              name='fname'
              placeholder='&#xf007;Write description'
            />
            {/* function upload */}

            <div className='UploadFile'>
              <p>File Upload</p>
              <input type='file' onChange={handleFileInputChange} />
              <button disabled={!selectedFile} onClick={handleFileUpload}>Upload File</button>
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
          {/* Tag */}
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
              <div >
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
            
        </div>
      </div>
    </Col>
  );
};
