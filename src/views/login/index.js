import React from 'react';

import { ReactComponent as SaolaLogo} from '../../assets/icons/saola-logo.svg';
import { ReactComponent as GoogleLogo} from '../../assets/icons/google-logo.svg';

import './index.sass';

const Login = () => {
	return (
		<div className="login">
			<SaolaLogo width={138} height={44} />
			<p className="login-slogan">Don't capture us<br />with guns, capture<br />us with cameras.</p>
			<div className='button-sign-in'>
				<GoogleLogo width={24} height={24} />
				<p className="text-sign-in">Continue with Google</p>
			</div>
			<div style={{height: '80px'}} />
		</div>
	)
}

export default Login;