import { useState, useEffect, useCallback } from 'react'
import { getRandomDataWithParams } from '../service/axios'
const Adresses = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getRandomDataWithParams('/addresses', {
                size: 100,
            })
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
            <h2>List of addresses</h2>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>City</th>
                            <th scope='col'>State</th>
                            <th scope='col'>Street</th>
                            <th scope='col'>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(item => (
                                <tr className='my-2 mx-4'>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>
                                        {item.street_name} {item.street_suffix}
                                    </td>
                                    <td>{item.zip}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Adresses
