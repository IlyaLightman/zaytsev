import { useState, useCallback, useEffect } from 'react'
import request from '../utils/request'

const storageName = 'userData'

export const useAuth = () => {
	const [token, setToken] = useState(null)
	const [sessionId, setSessionId] = useState(null)
	const [ready, setReady] = useState(false)
	const [userId, setUserId] = useState(null)
	const [userData, setUserData] = useState(null)

	const login = useCallback(async (sessionId) => {
		const data = await sessionData(sessionId)

		setSessionId(sessionId)
		setToken(data.token)
		setUserId(data.id)
		setUserData(data.userData)

		localStorage.setItem(storageName, JSON.stringify({
			sessionId
		}))
	}, [])

	const logout = useCallback(async () => {
		await request('/api/auth/kill',
			'POST', { sessionId })

		setSessionId(null)
		setUserId(null)
		setToken(null)
		setUserData(null)

		localStorage.removeItem(storageName)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))

		if (data && data.sessionId) {
			login(data.sessionId)
		}
		setReady(true)
	}, [login])

	const sessionData = async (sessionId) => {
		try {
			return await request(
				'/api/auth/session',
				'POST', { sessionId })
		} catch (err) {
			console.log(err)
			return {
				token: null,
				id: null,
				userData: null
			}
		}
	}


	return { login, logout, token, userId, ready, userData }
}

export default useAuth