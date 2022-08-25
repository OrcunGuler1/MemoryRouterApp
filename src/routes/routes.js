import * as pages from '../components'

const { About, Home, Users } = pages

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'users',
        element: <Users />,
        
    },
]
export default routes
