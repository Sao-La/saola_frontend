import React, { useEffect, useState } from 'react';
import { check } from '../../utils/api';
import './index.css';

const Home = () => {

  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const getStatus = async () => {
      const res = await check();
      if (res === "Hi there") {
        setStatus('ok :D')
      }
      else {
        setStatus('not connected :(')
      }
    }
    
    getStatus();
  }, [])

  return (
    <div className="home">
      <title><h3>Home here</h3></title>
      <section className="check status">
        <div>Checking frontend... Obviously it's fine :D</div>
        <div>{`Checking backend... ${status}`}</div>
      </section>
    </div>
  )
};

export default Home;