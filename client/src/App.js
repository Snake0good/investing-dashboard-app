import { FaAccusoft, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

function App() {
  const [stockValue, setStockValue] = useState(0)
  const [etfValue, setEtfValue] = useState(0)
  const [bondValue, setBondValue] = useState(0)
  const [cryptoValue, setCryptoValue] = useState(0)
  const [userName, setUserName] = useState('')


  function getStock(e) {
    setStockValue(e.target.value)
  }
  function getETF(e) {
    setEtfValue(e.target.value)
  }
  function getCrypto(e) {
    setCryptoValue(e.target.value)
  }
  function getBond(e) {
    setBondValue(e.target.value)
  }
  function getUserName(e) {
    setUserName(e.target.value)
  }

  return (
    <div className="bg-sky-200 min-h-screen w-full">
      <h1 className="text-6xl flex w-full justify-center pt-10 absolute">
        <FaAccusoft /> investure
      </h1>
      <div className="flex p-5 bg-sky-200 w-screen h-screen place-items-center justify-center">
        <div className="w-3/5 h-[500px] padding-10 ">
          <h1 className="text-center text-3xl pb-5">Investing. Done the right way.</h1>
          <img className="w-full h-full object-cover shadow-xl rounded-xl" src='https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80' alt='the future investor' />
        </div>
        <div className="bg-slate-700 w-2/5 flex flex-col space-y-3 p-4 m-24 mt-44 rounded-xl">
          <h1 className="text-4xl text-center text-white">Track Your Investing Now</h1>
          <p className="text-center text-white">Enter your initial invested amount.</p>
          <input 
            type="text"
            name="name"
            onChange={getUserName}
            className="p-2 text-xl bg-slate-100 text-blue-500 placeholder-blue-500"
            placeholder="User Name" 
          />
          <input 
            type="number"
            name="stock"
            onChange={getStock}
            className="p-2 text-xl"
            placeholder="Total Stock Value" 
          />
          <input 
            type="number"
            name="etf"
            onChange={getETF}
            className="p-2 text-xl"
            placeholder="Total ETF Value" 
          />
          <input 
            type="number"
            name="crypto"
            onChange={getCrypto}
            className="p-2 text-xl"
            placeholder="Total Crypto Value" 
          />
          <input 
            type="number"
            name="bond"
            onChange={getBond}
            className="p-2 text-xl"
            placeholder="Total Bond Value" 
          />

          <NavLink 
            to="/dashboard" 
            onClick={console.log(userName)}
            state={{
                title:"Dashboard", 
                total: (+stockValue) + (+etfValue) + (+cryptoValue) + (+bondValue), 
                userName: userName, 
                stocks: +stockValue, 
                ETF: +etfValue, 
                crypto: +cryptoValue, 
                bonds: +bondValue}}
                className="p-4 bg-slate-300 text-2xl text-slate-700 m-10 rounded-xl font-bold flex place-items-center justify-center"
          > 
                <h1>Go To Dashboard</h1>
                <FaArrowDown className="animate-bounce ml-5" />
          </NavLink>
        </div>
      </div>

      
    </div>
  );
}

export default App;
