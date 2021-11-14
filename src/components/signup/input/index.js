import React from "react";

import './index.sass'

const Input = ({
	value,
	onChange,
}) => {

	return (
		<div className="input-container">
			<input 
				className="input" 
				type="text" 
				placeholder="Username" 
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input;