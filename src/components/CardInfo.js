import { useState, useCallback, useEffect } from 'react'
import { getRandomDataWithParams } from '../service/axios'
import { formatString } from '../helpers'
const CardInfo = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getRandomDataWithParams('/credit_cards', {
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
            <div>
                <p>Loading...</p>
            </div>
        )
    if (error)
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    return (
        <div className='d-flex align-items-center flex-column'>
            <h2>List of cards</h2>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='row'>Card Number</th>
                            <th scope='row'>Card Type</th>
                            <th scope='row'>Expiration Date</th>
                            <th scope='row'>UID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(item => (
                                <tr className='my-2 mx-4'>
                                    <td>{item.credit_card_number}</td>
                                    <td className='text-capitalize'>
                                        {formatString(item.credit_card_type)}
                                    </td>
                                    <td>{item.credit_card_expiry_date}</td>
                                    <td>{item.uid}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardInfo
