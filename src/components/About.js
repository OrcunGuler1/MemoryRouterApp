import { useCallback, useEffect, useState } from 'react'
import { getRandomData } from '../service/axios'
const About = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getRandomData('/beers?size=100')
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
            <h2>List of beers</h2>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Brand</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Alcohol %</th>
                            <th scope='col'>Style</th>
                            <th scope='col'>Yeast</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => (
                                <tr key={index} className='my-2 mx-2'>
                                    <td>{item.brand}</td>
                                    <td>{item.name}</td>
                                    <td>{item.alcohol}</td>
                                    <td>{item.style}</td>
                                    <td>{item.yeast}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About
