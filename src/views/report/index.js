import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Post from '../../components/home/post';
import TabBar from '../../components/tab-bar';

import { ReactComponent as PlusGradient } from '../../assets/icons/plus-gradient.svg'

import './index.sass';
import ReportCard from '../../components/report/report';

const Report = () => {

  
  return (
    <div className="report">
      <div className="report-header">
        <Header />
        <TabBar focus="report" />
      </div>
      <div className="report-content">
        <div style={{height: '104px'}} />
        <ReportCard />
      </div>
    </div>
  )
};

export default Report;