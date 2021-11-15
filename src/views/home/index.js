import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Post from '../../components/home/post';
import TabBar from '../../components/tab-bar';

import { ReactComponent as PlusGradient } from '../../assets/icons/plus-gradient.svg'

import { useHistory } from 'react-router-dom';

import './index.sass';

const Home = () => {
  const posts = [{
    displayName: 'Anderson Chu', 
    location: 'Ho Chi Minh City, District 1', 
    avatar: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079', 
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et.',  
    likes: 10, 
    comments: 10,
  }, {
    displayName: 'Anderson Chu', 
    location: 'Ho Chi Minh City, District 1', 
    avatar: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079', 
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et.', 
    photo: 'https://unsplash.com/photos/EerxztHCjM8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2ODY1MDQy&force=true&w=1920', 
    likes: 10, 
    comments: 10,
  }, {
    displayName: 'Anderson Chu', 
    location: 'Ho Chi Minh City, District 1', 
    avatar: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079', 
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et.', 
    photo: 'https://unsplash.com/photos/EerxztHCjM8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2ODY1MDQy&force=true&w=1920', 
    likes: 10, 
    comments: 10,
  }, {
    displayName: 'Anderson Chu', 
    location: 'Ho Chi Minh City, District 1', 
    avatar: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079', 
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et.', 
    likes: 10, 
    comments: 10,
  }, {
    displayName: 'Anderson Chu', 
    location: 'Ho Chi Minh City, District 1', 
    avatar: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079', 
    text: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et.', 
    likes: 10, 
    comments: 10,
  }]

  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.getItem("access_token")) history.push('/login');
  }, [])

  return (
    <div className="home">
      <div className="home-header">
        <Header />
        <TabBar focus="home" />
      </div>
      <div className="home-content">
        <div style={{height: "20px"}} />
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
        <div style={{height: "20px"}} />
      </div>
      <div className="home-add-report">
        <PlusGradient width={32} height={32} />
      </div>
    </div>
  )
};

export default Home;