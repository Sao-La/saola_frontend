import React from 'react';

import { ReactComponent as HeartDark } from '../../../assets/icons/heart-dark.svg';
import { ReactComponent as ChatCircleDark } from '../../../assets/icons/chat-circle-dark.svg';
import { ReactComponent as PaperPlaneTiltDark } from '../../../assets/icons/paper-plane-tilt-dark.svg';
import { ReactComponent as ArchiveDark } from '../../../assets/icons/archive-dark.svg';


import './index.sass'
import Image from './image';

const Post = ({displayName, location, avatar, text, photo, likes, comments }) => {

	return (
		<div className="post">
			<div className="post-header">
				<img src={avatar} alt={displayName + '\'s avatar'} className="post-header-avatar" />
				<div className="post-header-info">
					<p className="post-header-info-name">{displayName}</p>
					<p className="post-header-info-location">{'at ' + location}</p>
				</div>
			</div>
			<p className="post-text">{text}</p>
			{photo ? <Image src={photo} alt={displayName + '\'s photo'} likes={likes} comments={comments} /> 
						 : <div className="post-footer">
				<div className="post-footer-item">
					<HeartDark width={20} height={20}/>
					<p className="post-footer-text">{likes}</p>
				</div>
				<div className="post-footer-item">
					<ChatCircleDark width={20} height={20}/>
					<p className="post-footer-text">{comments}</p>
				</div>
				<div className="post-footer-item">
					<PaperPlaneTiltDark width={20} height={20}/>
				</div>
				<div style={{flex: 1}} />
				<ArchiveDark width={20} height={20}/>
			</div>}
		</div>
	)
}

export default Post;