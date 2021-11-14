import React from 'react';

import { ReactComponent as SaolaLogo } from '../../assets/icons/saola-logo.svg'
import { ReactComponent as SignOut } from '../../assets/icons/sign-out.svg'

import './index.sass'

const Header = () => {

	return (
		<div className="header-container">
			<SaolaLogo width={90} height={29} />
			<SignOut width={32} height={32} />
		</div>
	)
}

export default Header;