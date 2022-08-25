import { MemoryRouter as Router, Route, Routes, Link } from 'react-router-dom'
import routes from './routes/routes'
import { links } from './routes/links'
import './styles/styles.scss'

function App() {
    return (
        <div>
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
            </Router>
        </div>
    )
}

export default App
