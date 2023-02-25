import React from 'react';
import { Container } from 'react-bootstrap';
import { ListPost } from '../../Components/ListPost/Listpost';
import { Post } from '../../Components/Post/Post';
import { TagbarLeft } from '../../Components/TagBar/Tagbar-left';
import { TagbarRight } from '../../Components/TagBar/Tagbar-right';
import './Home.scss';
export const Home = () => {
  return (
    <>  
        <Post/>
    </>
  );
};
