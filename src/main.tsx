import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/router'
import {Provider} from 'react-redux';
import store from './redux/store'
import { Toaster } from 'sonner'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position='top-right' />
      <RouterProvider router={route}/>
    </Provider>
  </React.StrictMode>,
)
