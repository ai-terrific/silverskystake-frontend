import { RouterProvider } from 'react-router-dom'

import './App.css'
import { ThemedToastContainer } from './components/Core/ThemedToastContainer'
import routes from './routes'
import { AppTheme } from './theme'

function App() {
  return (
    <AppTheme>
      <RouterProvider router={routes} />
      <ThemedToastContainer />
    </AppTheme>
  )
}

export default App
