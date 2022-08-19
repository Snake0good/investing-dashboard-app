import { FaAccusoft, FaArrowDown } from "react-icons/fa";
import { useState, createContext } from "react";
import { NavLink } from 'react-router-dom'
// import dashboardGIF from './images/dashboard-copy.gif'
import investureLogo from './images/investure-logo.png'


function App() {
  const [stockValue, setStockValue] = useState(123.45)
  const [etfValue, setEtfValue] = useState(543.21)
  const [bondValue, setBondValue] = useState(123.45)
  const [cryptoValue, setCryptoValue] = useState(543.21)
  const [userName, setUserName] = useState('User Name')


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


  if (window.innerWidth < (1250)) {
    return (
        <>
            <div className="flex justify-center">
              <img src={investureLogo} className="h-44"/> 
            </div>
            <h1 className="text-2xl text-center p-5">Sorry, the <span className="italic text-slate-700">investure</span> app must be viewed on a device with a screen width larger than 1250px. Your device width is only {window.innerWidth}px </h1>
            <h1 className="text-xl text-center p-5">We apologize for any inconvenience. Have a look below to see what you're missing!</h1>
            {/* <img className="w-full h-full" src={dashboardGIF} alt='dashboard gif' /> */}
        </>
  )} else {
    return (
      <div className="bg-sky-200 min-h-screen w-full">
        <div className='flex justify-center pt-10 mb-0'>
              <img src={investureLogo} className='w-24 text-center' alt='logo' />
        </div>
      
            <h1 className="text-center text-3xl pb-5">Investing. Done the right way.</h1>
        <div className="flex p-5 bg-sky-200 w-screen justify-center">
          <div className="w-3/5 h-[500px] padding-10 ">
            <img className="w-full h-full object-cover shadow-xl rounded-xl" src='https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80' alt='the future investor' />
          </div>
          
          <div className="w-2/5 p-4">
            <form className="bg-slate-700 flex flex-col space-y-3 p-4 rounded-xl">
              <h1 className="text-4xl text-center text-white">Track Your Investing Now</h1>
              <p className="text-center text-white">Enter your initial invested amount.</p>
              <input 
                type="text"
                name="name"
                onChange={getUserName}
                className="p-2 text-xl bg-slate-100 text-blue-500 placeholder-blue-500"
                placeholder="User Name" 
                required
              />
              <input 
                type="number"
                name="stock"
                onChange={getStock}
                className="p-2 text-xl"
                placeholder="Total Stock Value"
                required 
              />
              <input 
                type="number"
                name="etf"
                onChange={getETF}
                className="p-2 text-xl"
                placeholder="Total ETF Value"
                required 
              />
              <input 
                type="number"
                name="crypto"
                onChange={getCrypto}
                className="p-2 text-xl"
                placeholder="Total Crypto Value"
                required 
              />
              <input 
                type="number"
                name="bond"
                onChange={getBond}
                className="p-2 text-xl"
                placeholder="Total Bond Value"
                required 
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
            </form>
          </div>

        </div>

        
      </div>
    );
  }
}

export default App;
