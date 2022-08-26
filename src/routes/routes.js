import * as pages from '../components'

const { About, Home, Users, CardInfo, Adresses } = pages

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
    {
        path: 'adresses',
        element: <Adresses />,
    },
]
export default routes
