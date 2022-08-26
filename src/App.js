import { MemoryRouter as Router, Route, Routes, Link } from 'react-router-dom'
import routes from './routes/routes'
import { links } from './routes/links'
import './styles/styles.scss'

function App() {
    return (
        <div className='h-100'>
            <Router>
                <nav className='w-100 bg-secondary d-flex flex-row justify-content-center py-3'>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className='text-black text-decoration-none mx-2'
                            {...link}
                        />
                    ))}
                </nav>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                </Routes>
                <footer className='fixed-bottom w-100 bg-primary text-dark align-items-baseline'>
                    <div className='d-flex justify-content-center'>
                        <p className='text-center m-0 py-2'>
                            None of the information in this website is real. It
                            is only for educational purposes.
                        </p>
                    </div>
                </footer>
            </Router>
        </div>
    )
}

export default App
