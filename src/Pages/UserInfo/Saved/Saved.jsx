import React from 'react'
import {Col} from 'react-bootstrap';
import './Saved.scss'
import {ListPost} from '../../../Components/ListPost/Listpost'

export const Saved = () => {
  return (
    <Col md= {{span: 12}}>
      <ListPost/>
    </Col>
  )
}
