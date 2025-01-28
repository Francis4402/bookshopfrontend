import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/router'
import {Provider} from 'react-redux';
import store, { persistor } from './redux/store'
import { Toaster } from 'sonner'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position='top-right' />
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={route}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
