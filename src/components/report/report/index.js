import React, { useRef, useState } from 'react';

import { ReactComponent as ImageLogo } from '../../../assets/icons/image.svg';
import { ReactComponent as X } from '../../../assets/icons/x.svg';
import { ReactComponent as XCircle } from '../../../assets/icons/x-circle.svg';

import { useSelector } from 'react-redux';

import './index.sass'
import { Controller, useForm } from 'react-hook-form';

const ReportCard = () => {

	const [text, setText] = useState('')
	const [image, setImage] = useState(null)

	const auth = useSelector(state => state.auth)

	const inputFileRef = useRef(null)

	const { control, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    defaultValues: {
      desc: '',
			image: null,
    }
  });

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<div className="report-card">
			<div className="report-card-header">
				<img src={auth.avt && auth.avt != '' ? auth.avt : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt={auth.name + '\'s avatar'} className="post-header-avatar" />
				<div className="report-card-header-info">
					<p className="report-card-header-info-name">{auth.name}</p>
					<p className="report-card-header-info-location">{'is creating a report'}</p>
				</div>
				<X width={32} height={32} style={{marginRight: '9px'}} />
			</div>
			<div className="report-card-body">
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<textarea 
						className="report-card-body-input" 
						placeholder="What's happening?" 
						value={value}
						onChange={onChange}
					/>
				)}
				name="desc"
			/>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<input 
						type='file' 
						accept="image/*"
						ref={inputFileRef} 
						style={{display: 'none'}}
						onChange={onChange}
					/>
				)}
				name="image"
			/>
			</div>
			<div className="report-card-image" onClick={() => !getValues('image') && inputFileRef.current.click()}>
				{getValues('image') ? <img src={getValues('image')} alt="report image" className="report-card-image-img" />
							              : <ImageLogo width={32} height={32} />}	
			</div>
			{getValues('image') && <XCircle width={32} height={32} onClick={() => setValue('image', null)} className="report-card-remove-image" />}
			<div className="report-card-footer" onClick={handleSubmit(onSubmit)}>
				<p className="report-card-footer-text">Report</p>
			</div>
		</div>
	)
}

export default ReportCard;