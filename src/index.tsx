import { StyledEngineProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary, getErrorMessage } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './index.css'
import { persistor, store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StyledEngineProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div role='alert'>
              <p>Something went wrong:</p>
              <pre>{getErrorMessage(error)}</pre>
              <button onClick={resetErrorBoundary}>Try again</button>
            </div>
          )}
          onError={() => {
            // Log the error to your error reporting service
          }}
          onReset={() => {
            // Reset any state that may have caused the error
          }}
        >
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </StyledEngineProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
