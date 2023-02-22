import React from 'react';
import './Listpost.scss'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/Bs';
import { CgComment} from 'react-icons/Cg';
import { FiShare2} from 'react-icons/Fi';
import { MdSaveAlt} from 'react-icons/Md';
export const ListPost = () => {
  return (
    <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <div className='List-post'>
                    <div className='postcontent'>
                        <div className='postlike'>
                            <span className='upvote'>
                                <BsFillCaretUpFill/>
                            </span>
                            <span>200</span>
                            <span className='downvote'>
                                <BsFillCaretDownFill/>
                            </span>
                        </div>
                        <div className='user-post'>
                            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'/>
                            <h4>Khoa</h4>
                        </div>
                        <h2 className='title-content'>cxzczxczx</h2>
                        <ul className='tag-content'>
                            <li>#reactjs</li>
                            <li>#java</li>
                        </ul>
                    </div>
                    <div className='dost'>
                        <span><CgComment/></span>
                        <span><FiShare2/></span>
                        <span><MdSaveAlt/></span>
                    </div>
                </div>
                <div className='List-post'>
                    <div className='postcontent'>
                        <div className='postlike'>
                            <span className='upvote'>
                                <BsFillCaretUpFill/>
                            </span>
                            <span>200</span>
                            <span className='downvote'>
                                <BsFillCaretDownFill/>
                            </span>
                        </div>
                        <div className='user-post'>
                            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'/>
                            <h4>Khoa</h4>
                        </div>
                        <h2 className='title-content'>cxzczxczx</h2>
                        <ul className='tag-content'>
                            <li>#reactjs</li>
                            <li>#java</li>
                        </ul>
                    </div>
                    <div className='dost'>
                        <span><CgComment/></span>
                        <span><FiShare2/></span>
                        <span><MdSaveAlt/></span>
                    </div>
                </div>
                <div className='List-post'>
                    <div className='postcontent'>
                        <div className='postlike'>
                            <span className='upvote'>
                                <BsFillCaretUpFill/>
                            </span>
                            <span>200</span>
                            <span className='downvote'>
                                <BsFillCaretDownFill/>
                            </span>
                        </div>
                        <div className='user-post'>
                            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'/>
                            <h4>Khoa</h4>
                        </div>
                        <h2 className='title-content'>cxzczxczx</h2>
                        <ul className='tag-content'>
                            <li>#reactjs</li>
                            <li>#java</li>
                        </ul>
                    </div>
                    <div className='dost'>
                        <span><CgComment/></span>
                        <span><FiShare2/></span>
                        <span><MdSaveAlt/></span>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
};
