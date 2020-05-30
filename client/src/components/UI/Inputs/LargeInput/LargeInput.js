import React from 'react'
import Radium from 'radium'

const LargeInput = () => {
	const {
		title,
		placeholder,
		invalid,
		onChange,
		value
	} = props

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center'
		}}>
			<p style={{
				color: invalid ? 'red' : 'black',
				fontFamily: 'Bahnschrift',
				marginRight: '20px'
			}}
			>{title}</p>
			<textarea
				style={{
					border: '1px solid gray',
					borderRadius: '10px',
					padding: '5px 5px 5px 10px',
					width: '225px',
					height: '25px',
					outline: 'none'
				}}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default LargeInput