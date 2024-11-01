import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux'
import { store } from './store/store.ts'
import { QueryClient, QueryClientProvider ,  } from 'react-query'

import {ReactQueryDevtools} from 'react-query/devtools'



const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider  client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
    <Provider store={store}>
    <Toaster/>
    <App />
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
