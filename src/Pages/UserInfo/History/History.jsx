import React from 'react'
import {Col} from 'react-bootstrap'
import './History.scss'
import { ListPost } from '../../../Components/ListPost/Listpost'

export const History = () => {
  return (
    <Col md={{span: 12}}>
      <ListPost/>
    </Col>
  )
}
