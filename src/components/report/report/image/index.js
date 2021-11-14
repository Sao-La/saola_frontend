import React from 'react';

import { ReactComponent as HeartLight } from '../../../../assets/icons/heart-light.svg';
import { ReactComponent as ChatCircleLight } from '../../../../assets/icons/chat-circle-light.svg';
import { ReactComponent as PaperPlaneTiltLight } from '../../../../assets/icons/paper-plane-tilt-light.svg';
import { ReactComponent as ArchiveLight } from '../../../../assets/icons/archive-light.svg';

import './index.sass'

const Image = ({ src, alt, likes, comments }) => {
	return (
		<div className="post-image">
			<img src={src} alt={alt} className="post-image-img" />
			<div className="post-image-overlay" />
			<div className="post-image-footer">
				<div className="post-image-footer-item">
					<HeartLight width={20} height={20}/>
					<p className="post-image-footer-text">{likes}</p>
				</div>
				<div className="post-image-footer-item">
					<ChatCircleLight width={20} height={20}/>
					<p className="post-image-footer-text">{comments}</p>
				</div>
				<div className="post-image-footer-item">
					<PaperPlaneTiltLight width={20} height={20}/>
				</div>
				<div style={{flex: 1}} />
				<ArchiveLight width={20} height={20}/>
			</div>
		</div>
	);
}

export default Image;