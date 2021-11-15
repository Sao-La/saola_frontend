import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import TabBar from '../../components/tab-bar';

import * as api from '../../utils/api';

import './index.sass';
import MapView from '../../components/map/map-view';
import { useDispatch } from 'react-redux';

const Map = () => {
  const [mapData, setMapData] = useState([]);

  const dispatch = useDispatch();

  const parseData = async (data) => {
    const maxCount = data.reduce((acc, cur) => Math.max(acc, cur.count), 0);

    const parsedData = data.reduce((acc, curr) => {
      return {
        ...acc, 
        [curr.code]: curr.count / maxCount,
      } 
    }, {});
    return parsedData;
  }

  async function fetchMapData() {
    const response = await api.request.get('/province');
    const parsedData = await parseData(response.data.provinces);
    setMapData(parseData);
    dispatch({ type: 'SET_PROVINCES', payload: parsedData });
  }

  useEffect(() => {
    fetchMapData();
  }, []);

  return (
    <div className="map">
      <div className="map-header">
        <Header />
        <TabBar focus="map" />
      </div>
      <div className="map-content">
        <div style={{height: '104px'}} />
        <MapView data={mapData} />
      </div>
    </div>
  )
};

export default Map;