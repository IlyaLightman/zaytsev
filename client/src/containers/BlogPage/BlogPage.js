import React, { useContext } from 'react'
import './BlogPage.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const BlogPage = () => {
	const auth = useContext(AuthContext)
	console.log(auth)

	const isAdmin = auth.userData.isAdmin

	return (
		<div className='BlogPage'>
			<h3>Блог</h3>

			<div>
				<p>теги</p>
			</div>

			<div>
				<p>публикаций за внеделю за всё время</p>
			</div>

			<div>
				<p>сортировать по новизне по популярности</p>
			</div>

			<div>

			</div>

			{isAdmin ?
				<NavLink to='/create'>Создать пост</NavLink> : null}

		</div>
	)
}

export default BlogPage