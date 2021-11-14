import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { ReactComponent as SaolaLogo} from '../../assets/icons/saola-logo.svg';
import { ReactComponent as ArrowLeft} from '../../assets/icons/arrow-left.svg';
import Input from '../../components/signup/input';

import './index.sass';

const Signup = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
			displayName: '',
			password: '',
    }
  });

	function onSubmit(data) {

	}
	return (
		<div className="container">
			<ArrowLeft width="32px" height="32px" className="back-button" />
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
					name="displayName"
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
				<div className='button-sign-up'>
					<p className="text-sign-up">Sign up</p>
				</div>
			</div>
			<div style={{height: '80px'}} />
		</div>
	)
}

export default Signup;