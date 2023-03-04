import React from 'react'
import { Col } from 'react-bootstrap'
import { Answer } from '../../Components/Answer/Answer'
import { PostDetail } from '../../Components/PostDetail/PostDetail'
import { Sort } from '../../Components/Sort/Sort'

export const QuestionDetail = () => {
    return(
    <Col md={{ span: 6 }} >
        <PostDetail/>
        <Sort/>
        <Answer/>
    </Col>
    )  
}
