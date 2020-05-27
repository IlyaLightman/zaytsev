// Навбар для главной страницы
// Прозрачный с абсолютной позицией
// Один параметр - цвет

import React from 'react'
import '../Bar.scss'
import { NavLink } from 'react-router-dom'

const Mainbar = props => {

	return (
		<div className='Mainbar'
			style={{
				position: 'absolute'
			}}
		>
			<div className='LeftButtons'>
				<NavLink to='/' className='NavLink'>Главная</NavLink>
				<NavLink to='/blog' className='NavLink'>Блог</NavLink>
				<NavLink to='/projects' className='NavLink'>Проекты</NavLink>
			</div>
			<div className='Logo'>
				<h3>zaytsev.xyz</h3>
			</div>
			<div className='RightButtons'>
				<NavLink to='/shop' className='NavLink'>Магазин</NavLink>

				{ props.isAuthenticated ?
					<div>auth</div> :
					<NavLink to='/auth' className='NavLink'>Войти</NavLink>
				}


			</div>
		</div>
	)
}

export default Mainbar