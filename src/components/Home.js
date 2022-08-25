import { links } from '../routes/links'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='mt-4'>
            <h3 className='lh-lg ms-4'>
                Hello! This is a project to test out MemoryRouter from the
                package{' '}
                <span className='text-primary'>
                    <a
                        href='https://reactrouter.com/en/v6.3.0'
                        target='_blank'
                        rel='noreferrer'
                    >
                        react-router-dom
                    </a>
                </span>
                .
            </h3>
            <h4 className='ms-4'>List of routes:</h4>
            <ul className='list-group w-100'>
                {links.map((link, index) => (
                    <li key={index} className='list-group-item w-100 d-flex'>
                        <Link
                            className='text-primary text-capitalize text-center text-decoration-none w-100'
                            {...link}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
