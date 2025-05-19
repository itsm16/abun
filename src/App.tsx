import { createBrowserRouter } from 'react-router'
import Layout from './Layout'
import Test from './appComponents/Test'
import { Providers } from './Providers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Test />
      }
    ]
  }
])

function App() {
  return <Providers router={router} />
}

export default App
