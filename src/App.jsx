import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import WatchPage from './watchPage'
import MainContainer from './components/mainContainer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="watch" element={<WatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
