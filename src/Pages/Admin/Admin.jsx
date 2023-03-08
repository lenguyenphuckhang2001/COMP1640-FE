import React from 'react';
import './Admin.scss';
import { Col } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';

export const Admin = () => {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <div className='board'>
        <div className='user-add'>
          <h1>User</h1>
        </div>
        <div className='content-add'>
          <p>ID</p>
          <p>Name</p>
          <p>Description</p>
        </div>
        <div className='info-list'>
          <div className='list-1'>
            <p>1</p>
            <p>Js</p>
            <p>Test</p>
          </div>
          <div className='list-1'>
            <p>2</p>
            <p>Js</p>
            <p>Test</p>
          </div>
          <div className='list-1'>
            <p>3</p>
            <p>Js</p>
            <p>Test</p>
          </div>
          <div className='list-1'>
            <p>4</p>
            <p>Js</p>
            <p>Test</p>
          </div>
          <div className='list-1'>
            <p>5</p>
            <p>Js</p>
            <p>Test</p>
          </div>
          <div className='list-1'>
            <p>6</p>
            <p>Js</p>
            <p>Test</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
