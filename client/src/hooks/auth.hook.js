import { useCallback, useEffect, useState } from 'react'

const storageName = 'userAuthData'

const useAuth = () => {
	const [token, setToken] = useState(null)
	const [ready, setReady] = useState(false)
	const [userId, setUserId] = useState(null)

	const login = useCallback((jwtToken, id, uData) => {
		setToken(jwtToken)
		setUserId(id)

		localStorage.setItem(storageName, JSON.stringify({
			userId: id, token: jwtToken, userData: uData
		}))
	}, [])

	const logout = useCallback(() => {
		setToken(null)
		setUserId(null)

		localStorage.removeItem(storageName)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))

		if (data && data.token) {
			login(data.token, data.userId, data.userData)
		}
		setReady(true)
	}, [login])

	const getUserData = useCallback(() => {
		const data = JSON.parse(localStorage.getItem(storageName))
		return data ? data.userData : null
	}, [])

	return { login, logout, token, userId, ready, getUserData }
}

export default useAuth