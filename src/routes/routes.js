import * as pages from '../components'

const { About, Home, Users, CardInfo } = pages

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
    {
        path: 'cards',
        element: <CardInfo />,
    },
]
export default routes
