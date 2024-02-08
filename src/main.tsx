import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'

import '/dist/output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>,
)
