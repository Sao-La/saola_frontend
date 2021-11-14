import React, { useState } from 'react';

import { ReactComponent as HeartDark } from '../../../assets/icons/heart-dark.svg';
import { ReactComponent as ChatCircleDark } from '../../../assets/icons/chat-circle-dark.svg';
import { ReactComponent as PaperPlaneTiltDark } from '../../../assets/icons/paper-plane-tilt-dark.svg';
import { ReactComponent as ArchiveDark } from '../../../assets/icons/archive-dark.svg';
import { ReactComponent as ImageLogo } from '../../../assets/icons/image.svg';
import { ReactComponent as X } from '../../../assets/icons/x.svg';
import { ReactComponent as XCircle } from '../../../assets/icons/x-circle.svg';


import './index.sass'
import Image from './image';

const ReportCard = () => {
	const avatar = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/83166232_2554901268126967_8814119395086303232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=WQbZC1URo5AAX9DIR_j&_nc_ht=scontent.fsgn8-2.fna&oh=a1eadc1704e0e9e3224e6f5563fbe369&oe=61B77079'
	const displayName = 'Anderson Chu'

	const [text, setText] = useState('')
	const [image, setImage] = useState(null)

	return (
		<div className="report-card">
			<div className="report-card-header">
				<img src={avatar} alt={displayName + '\'s avatar'} className="post-header-avatar" />
				<div className="report-card-header-info">
					<p className="report-card-header-info-name">{displayName}</p>
					<p className="report-card-header-info-location">{'is creating a report'}</p>
				</div>
				<X width={32} height={32} style={{marginRight: '9px'}} />
			</div>
			<div className="report-card-body">
			<textarea 
				className="report-card-body-input" 
				placeholder="What's happening?" 
				// value={value}
				// onChange={onChange}
			/>
			</div>
			<div className="report-card-image" onClick={() => !image && setImage('https://unsplash.com/photos/EerxztHCjM8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2ODY1MDQy&force=true&w=1920')}>
				{image ? <img src={image} alt="report image" className="report-card-image-img" />
							 : <ImageLogo width={32} height={32} />}	
			</div>
			{image && <XCircle width={32} height={32} onClick={() => setImage(null)} className="report-card-remove-image" />}
			<div className="report-card-footer">
				<p className="report-card-footer-text">Report</p>
			</div>
		</div>
	)
}

export default ReportCard;