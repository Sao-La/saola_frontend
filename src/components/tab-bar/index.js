import React from 'react';

import { useHistory } from 'react-router-dom'

import { ReactComponent as Home } from '../../assets/icons/home.svg'
import { ReactComponent as FilePlus } from '../../assets/icons/file-plus.svg'
import { ReactComponent as Compass } from '../../assets/icons/compass.svg'
import { ReactComponent as Coin } from '../../assets/icons/coin.svg'
import { ReactComponent as HomeGradient } from '../../assets/icons/home-gradient.svg'
import { ReactComponent as FilePlusGradient } from '../../assets/icons/file-plus-gradient.svg'
import { ReactComponent as CompassGradient } from '../../assets/icons/compass-gradient.svg'
import { ReactComponent as CoinGradient } from '../../assets/icons/coin-gradient.svg'

import './index.sass'

const TabBar = ({ focus }) => {
	const history = useHistory();

	return (
		<div className="tabbar">
			<div className="tabbar-item" onClick={() => history.push('/')}>
				{focus === 'home' ? <HomeGradient width={32} height={32} /> : <Home width={32} height={32} />}
			</div>
			<div className="tabbar-item" onClick={() => history.push('/report')}>
				{focus === 'report' ? <FilePlusGradient width={32} height={32} /> : <FilePlus width={32} height={32} />}
			</div>
			<div className="tabbar-item" onClick={() => history.push('/map')}>
				{focus === 'map' ? <CompassGradient width={32} height={32} /> : <Compass width={32} height={32} />}
			</div>
			<div className="tabbar-item" onClick={() => history.push('/donate')}>
				{focus === 'donate' ? <CoinGradient width={32} height={32} /> : <Coin width={32} height={32} />}
			</div>
		</div>
	)
}

export default TabBar;