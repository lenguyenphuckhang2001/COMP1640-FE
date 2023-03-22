import axios from 'axios';
import React, { useEffect } from 'react';
import PostApi from '../../Api/PostApi';
import { ListPost } from '../../Components/ListPost/Listpost';
export const Home = () => {
  useEffect(() => {
    (async () => {
      const response = await PostApi.getAll();
      console.log('🚀 ~ file: Home.jsx:8 ~ response:', response);
    })();
  }, []);

  return (
    <>
      <ListPost />
    </>
  );
};
