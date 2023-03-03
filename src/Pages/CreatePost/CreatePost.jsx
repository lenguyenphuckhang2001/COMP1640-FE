import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';
import './CreatePost.scss';

export const CreatePost = (props) => {
  // Set tag
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelectChange = (event) => {
    const options = event.target.options;
    const selectedTags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTags.push(options[i].value);
      }
    }
    setSelectedTags(selectedTags);
  };

  //test tag
  const options = [
    { label: 'Javascripts', value: 'Javascripts' },

    { label: 'Html', value: 'Html' },

    { label: 'Scss', value: 'Scss' },
  ];

  const [value, setValue] = React.useState('Language');

  const handleChange = (event) => {
    setValue(event.target.value);
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

            {/* Select Tag */}

            <div className='select-tag-dropdown'>
              <select multiple value={selectedTags} onChange={handleTagSelectChange}>
                <option value='JavaScripts'>JavaScripts</option>
                <option value='ReactJs'>ReactJs</option>
                <option value='SCSS'>SCSS</option>
                <option value='Bootraps'>Bootraps</option>
                <option value='Chat GPT'>Chat GPT</option>
              </select>
              <ul>
                {selectedTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
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
            <div className='post-form'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='checkbox'
                    id='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='checkbox'>I agree to the terms and conditions</label>
                </div>
                <div className='button_post'>
                  <button type='submit' disabled={!isChecked}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </form>
          {/* test tag */}
          <div className='add-tag'>
            <label>
              <div className='text'>Do you want to choose language</div>

              <select value={value} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>

            <div className='tag_test'>
              <p> {value}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
