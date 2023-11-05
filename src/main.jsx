import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
    
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
