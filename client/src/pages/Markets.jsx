import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

function Markets() {
  let location = useLocation()
  const [markets, setMarkets] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let marketSummary = `https://yfapi.net/v6/finance/quote/marketSummary`
  
  let options = {
    method: 'GET',
    mode: "cors",
    url: marketSummary,
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': `${API_KEY}`
    }
  };

  const handleClick = async (e) => {
    setIsLoading(true)
    setMarkets([])
    
    await axios.request(options)
    .then(function (response) {
      console.log(response.data.marketSummaryResponse.result);
      setMarkets(response.data.marketSummaryResponse.result)
      setIsLoading(false)
    })
    .catch(function (error) {
      console.error(error);
    });
        
  }

  useEffect(() => {
    handleClick()
  }, [])
  

  return (
    <div className="flex">
        <Navbar />
        <div className="p-5 w-full bg-sky-200 pl-44 min-h-screen">
            <Header title={location.state.title} total={location.state.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} userName={location.state.userName}/>
            
            {/* all graphs below */}
            <div className=" mt-2 pl-6">
              <div 
                  className="flex w-full justify-between place-items-center h-16 m-3 border-bottom"
                >
                  <h1 className="font-bold text-xl w-1/4 text-center">Market:</h1>
                  <h1 className="font-bold text-xl w-1/4 text-center">Current Price: </h1>
                  <h1 className="font-bold text-xl w-1/4 text-center">Change: </h1>
                  <h1 className="font-bold text-xl w-1/4 text-center">% Change: </h1>
                </div>



              {isLoading ? 
             <>
                <div className="flex w-full  h-16 shadow-xl m-3 bg-slate-700 rounded-xl">
                  <div className="animate-pulse flex w-full justify-between place-items-center pl-4 pr-4 ">
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>                   
                  </div>
                </div>
                <div className="flex w-full  h-16 shadow-xl m-3 bg-slate-700 rounded-xl">
                  <div className="animate-pulse flex w-full justify-between place-items-center pl-4 pr-4 ">
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>                   
                  </div>
                </div>
                <div className="flex w-full  h-16 shadow-xl m-3 bg-slate-700 rounded-xl">
                  <div className="animate-pulse flex w-full justify-between place-items-center pl-4 pr-4 ">
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>                   
                  </div>
                </div>
                <div className="flex w-full  h-16 shadow-xl m-3 bg-slate-700 rounded-xl">
                  <div className="animate-pulse flex w-full justify-between place-items-center pl-4 pr-4 ">
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>
                    <div className="font-bold text-xl w-32 text-center h-8 bg-slate-300 rounded"></div>                   
                  </div>
                </div>
                <h1 className="text-2xl w-full text-center text-slate-700">Loading...</h1> 
             </>
              : null}
              {markets && markets.map((market) => {
                return (
                <div 
                  key={Math.random()}
                  className="flex w-full justify-between place-items-center h-16 shadow-xl m-3 bg-white rounded-xl"
                >
                  <h1 className="font-bold text-xl w-1/4 text-center">{market.shortName}</h1>
                  <h1 className="text-md w-1/4 text-center">{market.regularMarketPrice.fmt}</h1>
                  {market.regularMarketChange.raw > 0 
                  ? <h1 className="text-md w-1/4 text-center text-green-500">{market.regularMarketChange.fmt}</h1>
                  : <h1 className="text-md w-1/4 text-center text-red-500">{market.regularMarketChange.fmt}</h1>
                  }
                  
                  {market.regularMarketChangePercent.raw > 0 
                  ? <h1 className="text-md font-bold w-1/4 text-center text-green-500">{market.regularMarketChangePercent.fmt}</h1>
                  : <h1 className="text-md font-bold w-1/4 text-center text-red-500">{market.regularMarketChangePercent.fmt}</h1>
                  }
                </div>
                )
              })}
              
                
            </div>

        </div>
    </div>
  )
}
export default Markets