import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './components/style/GlobalStyle'
import colors from './components/style/theme/colors'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
