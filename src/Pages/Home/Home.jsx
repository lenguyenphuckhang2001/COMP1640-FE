import React from 'react';
import { ListPost } from '../../Components/ListPost/Listpost';
import { Post } from '../../Components/ListPost/Post/Post';
import './Home.scss';
export const Home = () => {
  return (
    <>  
        <Post/>
        <ListPost/>
    </>
  );
};
