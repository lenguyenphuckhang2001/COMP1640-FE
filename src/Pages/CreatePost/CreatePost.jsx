import React from 'react';
import JSZip from 'jszip';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';
import './CreatePost.scss';

export const CreatePost = (props) => {
  //set keybroard
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleBoldClick = (e) => {
    e.preventDefault();
    setBold(!bold);
  };

  const handleItalicClick = (e) => {
    e.preventDefault();
    setItalic(!italic);
  };

  const handleUnderlineClick = (e) => {
    e.preventDefault();
    setUnderline(!underline);
  };

  const textStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    textDecoration: underline ? 'underline' : 'none',
  };

  // Set tag

  const options = [
    { label: 'Categories', value: 'Categories' },

    { label: 'ReactJs', value: 'ReactJs' },

    { label: 'Bootraps', value: 'Bootraps' },

    { label: 'Html', value: 'Html' },

    { label: 'Scss', value: 'Scss' },
  ];

  const [value, setValue] = React.useState('Language');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //Set FileUpload
  const [file, setFile] = useState(null);

  function handleUpload() {
    const formData = new FormData();
    formData.append('file', file);
    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('success', result);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadAndDownload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.blob())
        .then((blob) => {
          const zip = new JSZip();
          zip.file(file.name, blob);
          zip.generateAsync({ type: 'blob' }).then((content) => {
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${file.name}.zip`);
            document.body.appendChild(link);
            link.click();
          });
        });
    } else {
      alert('Please choose a file first');
    }
  };

  //Set checkbox

  const [isChecked, setIsChecked] = useState(false);
  const [postText, setPostText] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isChecked) {
      // Send the post to a server-side endpoint
      console.log(`Submitting post: ${postText}`);
    } else {
      console.log('Checkbox must be checked to submit post');
    }
  };

  return (
    <Col md={{ span: 6 }}>
      {/* createpost content */}
      <div className='createpost'>
        <div className='center'>
          <form>
            <p className='title'> Create a post</p>
            <input className='ip_title' type='text' id='fname' name='fname' placeholder='Title' />
            <p className='question'>Question</p>
            <div className='icon_item'>
              <button
                className='icon'
                onClick={(e) => {
                  handleBoldClick(e);
                }}
              >
                <BiBold />
              </button>
              <button
                className='icon'
                onClick={(e) => {
                  handleItalicClick(e);
                }}
              >
                <BiItalic />
              </button>
              <button
                className='icon'
                onClick={(e) => {
                  handleUnderlineClick(e);
                }}
              >
                <BiUnderline />
              </button>
            </div>
            <input className='ip_question' style={textStyle} placeholder=' Write description....' />

            {/* select tag */}
            <div className='add-tag'>
              <label>
                <select value={value} onChange={handleChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* function upload and download */}
            <div className='file-upload-and-download'>
              <label htmlFor='file-input' className='file-upload-and-download__label'>
                <input
                  type='file'
                  id='file-input'
                  className='file-upload-and-download__input'
                  onChange={handleFileChange}
                />
                <span className='file-upload-and-download__text'>
                  {file ? file.name : 'Choose file'}
                </span>
              </label>
              <div className='file-up-and-down'>
                <form className='upload__form' onSubmit={handleUpload}>
                  <button>Upload</button>
                </form>
                <button className='download__button' onClick={handleUploadAndDownload}>
                  Download
                </button>
              </div>
            </div>
            {/* function checkbox */}
            <div className='post-form'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <div className='ip_check'>
                    <input
                      className='check_item'
                      type='checkbox'
                      id='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <div>
                      <label htmlFor='checkbox'>I agree to the terms </label>
                    </div>
                  </div>
                  {/* anonymous */}
                  <div class='form-check form-switch anonymous'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='flexSwitchCheckDefault'
                    />
                    <label class='form-check-label' for='flexSwitchCheckDefault'>
                      Anonymous
                    </label>
                  </div>
                </div>
                <div className='button_post'>
                  <button type='submit' disabled={!isChecked}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </Col>
  );
};
