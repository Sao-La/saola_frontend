import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { ReactComponent as SaolaLogo} from '../../assets/icons/saola-logo.svg';
import { ReactComponent as ArrowLeft} from '../../assets/icons/arrow-left.svg';
import Input from '../../components/signup/input';

import * as api from '../../utils/api';

import { useHistory } from 'react-router-dom';

import './index.sass';

const Signup = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
			name: '',
			password: '',
    }
  });

	const history = useHistory();

	async function onSubmit(data) {
		const response = await api.request.post('/signup', data);
		if (response.code == 0) {
			history.push('/login');
		} else {
			alert(response.msg);
		}
	}

	return (
		<div className="container">
			<ArrowLeft width="32px" height="32px" className="back-button" onClick={() => history.push('/login')}/>
			<SaolaLogo width={138} height={44} />
			<p className="slogan">Hello, welcome!</p>
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
							type="text" 
							placeholder="Choose your display name" 
							value={value}
							onChange={onChange}
						/>
					)}
					name="name"
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
							placeholder="Create a strong password" 
							value={value}
							onChange={onChange}
						/>
					)}
					name="password"
				/>
				<div className='button-sign-up' onClick={handleSubmit(onSubmit)}>
					<p className="text-sign-up">Sign up</p>
				</div>
			</div>
			<div className='jump-to-sign-in'>
					<p className="jump-to-sign-in-text">Already have an account?</p>
					<p className="jump-to-sign-in-text-highlight" onClick={() => history.push('/login')}>Sign in</p>
				</div>
			{/* <div style={{height: '80px'}} /> */}
		</div>
	)
}

export default Signup;