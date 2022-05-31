import React from 'react';
import './Button.scss';

const Button = ({
	value = 'Default',
	title = ``,
	titleColor = '#333',
	variant = '',
	disableShadow = false,
	disabled = false,
	startIcon = false,
	endIcon = false,
	size = 'sm',
	color = 'default',
}) => {
	return (
		<div className="btnGroup">
			<p className="btnTitle" style={{ color: `${titleColor}` }}>
				{title}
			</p>
			<button
				className={`btn btn${variant ? `--${variant}` : ''} 
          ${disableShadow && 'disableShadow'} 
          ${disabled && 'disabled'}
          ${size} 
          ${color}`}
			>
				{startIcon && (
					<i className="material-icons" style={{ marginRight: '10px' }}>
						{startIcon}
					</i>
				)}
				{value}
				{endIcon && (
					<i className="material-icons" style={{ marginLeft: '10px' }}>
						{endIcon}
					</i>
				)}
			</button>
		</div>
	);
};

export default Button;
