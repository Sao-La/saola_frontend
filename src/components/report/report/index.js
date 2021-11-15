import React, { useRef, useState, useEffect } from 'react';

import { ReactComponent as ImageLogo } from '../../../assets/icons/image.svg';
import { ReactComponent as X } from '../../../assets/icons/x.svg';
import { ReactComponent as XCircle } from '../../../assets/icons/x-circle.svg';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import * as api from '../../../utils/api'

import './index.sass'
import { Controller, useForm } from 'react-hook-form';

const ReportCard = () => {

	const [text, setText] = useState('')
	const [image, setImage] = useState(null)
	const [imageSource, setImageSource] = useState('')
	const [position, setPosition] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			setPosition({
				latitude: position.coords.latitude, 
				longitude: position.coords.longitude,
			})
		})
	}, [])

	const history = useHistory()

	const onTextChange = (e) => {
		setText(e.target.value)
	}

	const onImageChange = (e) => {
		setImage(e.target.files[0])
		const reader = new FileReader();
  	const url = reader.readAsDataURL(e.target.files[0]);

   reader.onloadend = function (e) {
      setImageSource([reader.result]);
    }.bind(this);
  console.log(url) // Would see a path?
	}

	const auth = useSelector(state => state.auth)

	const inputFileRef = useRef(null)

	async function onSubmit() {
		console.log(text, image)

	
		const response = await api.request.postForm('/report', {
			desc: text,
			img: image,
			location: [position.latitude, position.longitude],
		});

		console.log({
			desc: text,
			img: image,
			'location[0]': position.latitude,
			'location[1]': position.longitude,
		})
		console.log(response);

		// if (response.code == 0) {
			history.push('/');
		// } else {
			// alert(response.msg);
		// }

		
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
			<textarea 
				className="report-card-body-input" 
				placeholder="What's happening?" 
				onChange={onTextChange}
				value={text}
			/>
			<input 
				type='file' 
				accept="image/*"
				ref={inputFileRef} 
				style={{display: 'none'}}
				onChange={onImageChange}
			/>
			</div>
			<div className="report-card-image" onClick={() => !image && inputFileRef.current.click()}>
				{image ? <img src={imageSource} alt="report image" className="report-card-image-img" />
							 : <ImageLogo width={32} height={32} />}	
			</div>
			{image && <XCircle width={32} height={32} onClick={() => setImage(null)} className="report-card-remove-image" />}
			<div className="report-card-footer" onClick={() => onSubmit()}>
				<p className="report-card-footer-text">Report</p>
			</div>
		</div>
	)
}

export default ReportCard;