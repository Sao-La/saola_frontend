import React from 'react';

import { ReactComponent as SaolaLogo} from '../../assets/icons/saola-logo.svg';
import { ReactComponent as GoogleLogo} from '../../assets/icons/google-logo.svg';

import {useDispatch, useSelector} from 'react-redux';

import * as api from '../../utils/api';

import './index.sass';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
			password: '',
    }
  });

	const dispatch = useDispatch();

	async function onSubmit(data) {
		const response = await api.request.post('/signin', data);
		console.log(response);

		if (response.code == 0) {
			localStorage.setItem('access_token', response.data.token);
			dispatch({ 
				type: 'SET_AUTH', 
				payload: {
					name: response.data.user.name,
					avt: response.data.user.avt,
				},
			});
			history.push('/');
		} else {
			alert(response.msg);
		}
	}

	const history = useHistory();
	
	
	return (
		<div className="login">
			<SaolaLogo width={138} height={44} />
			<p className="login-slogan">Don't capture us<br />with guns, capture<br />us with cameras.</p>
			<div className="form-container">
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<input 
							className="input" 
							type="email" 
							placeholder="Enter your email" 
							value={value}
							onChange={onChange}
						/>
					)}
					name="email"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<input 
							className="input" 
							type="password" 
							placeholder="Enter your password" 
							value={value}
							onChange={onChange}
						/>
					)}
					name="password"
				/>
				<div className='button-sign-in' onClick={handleSubmit(onSubmit)}>
					<p className="text-sign-in">Sign in</p>
				</div>
				<div className='jump-to-sign-up'>
					<p className="jump-to-sign-up-text">Don't have an account?</p>
					<p className="jump-to-sign-up-text-highlight" onClick={() => history.push('/signup')}>Sign up</p>
				</div>
			</div>
			{/* <div style={{height: '80px'}} /> */}
		</div>
	)
}

export default Login;