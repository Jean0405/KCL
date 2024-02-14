import './index.css'

import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import { CartProvider } from './utils/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NextUIProvider>
)
