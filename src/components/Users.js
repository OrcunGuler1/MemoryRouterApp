import { getRandomDataWithParams } from '../service/axios'
import { useState, useEffect, useCallback } from 'react'
const Users = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getRandomDataWithParams('/users', { size: 100 })
            setData([...new Set(data)])
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (loading)
        return (
            <div className='d-flex w-100 justify-content-center'>
                Loading...
            </div>
        )
    if (error)
        return (
            <div className='d-flex w-100 justify-content-center'>
                Error: {error.message}
            </div>
        )
    return (
        <div className='d-flex align-items-center flex-column'>
            <h2>List of users</h2>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Avatar</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => (
                                <tr key={index} className='my-2 mx-2'>
                                    <td>
                                        <img
                                            src={item.avatar}
                                            alt={
                                                item.firstname +
                                                ' ' +
                                                item.last_name
                                            }
                                        />
                                    </td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
