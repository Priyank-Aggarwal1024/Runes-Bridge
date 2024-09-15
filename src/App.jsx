import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Airdrop, CryptoHistory, DepositCrypto, WithdrawCrypto } from './components';
import { Home } from './pages'
function App() {
  return (
    <>
      <div className="app w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<DepositCrypto />} />
          <Route path="/withdraw" element={<WithdrawCrypto />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/history" element={<CryptoHistory />} />
        </Routes>
      </div>
    </>
  )
}

export default App
