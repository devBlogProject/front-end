import { RecoilRoot } from 'recoil'
import Router from '@pages/Router'
import GlobalStyle from '@styles/GlobalStyle.tsx'

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </>
  )
}

export default App
