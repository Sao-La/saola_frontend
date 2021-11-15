import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as VN } from '../../../assets/icons/vn.svg';
import VietnamMap from '../vietnam-map';


import './index.sass'

const MapView = () => {
	const data = useSelector(state => state.provinces);

	return (
		<div className="map-view">
			{data && <VietnamMap 
				width="auto" 
				height="80%" 
				data={data} 
			/>}
		</div>
	)
}

export default MapView;