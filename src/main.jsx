// Importa o StrictMode do React para ajudar a identificar problemas no código durante o desenvolvimento.
import { StrictMode } from 'react'

// Importa a função createRoot do React DOM para criar a raiz da aplicação.
import { createRoot } from 'react-dom/client'

// Importa o componente principal da aplicação.
import App from './App.jsx'

// Importa o arquivo de estilos globais.
import './index.css'

// Cria a raiz da aplicação no elemento HTML com o ID 'root' e renderiza o componente App dentro do StrictMode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
