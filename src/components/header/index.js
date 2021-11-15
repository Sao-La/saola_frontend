import React from 'react';

import { ReactComponent as SaolaLogo } from '../../assets/icons/saola-logo.svg'
import { ReactComponent as SignOut } from '../../assets/icons/sign-out.svg'

import { useHistory } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import './index.sass'

const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSignOut = () => {
		window.localStorage.removeItem('access_token');
		dispatch({type: 'RESET_AUTH'});
		history.push('/login');
	}

	return (
		<div className="header-container">
			<SaolaLogo width={90} height={29} onClick={() => history.push('/')} />
			<SignOut width={32} height={32} onClick={handleSignOut}/>
		</div>
	)
}

export default Header;