import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import { useState } from "react"

import axios from 'axios'
import { useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

function Search() {
  let location = useLocation()
  const [choice, setChoice] = useState('AAPL')
  const [keyStats, setKeyStats] = useState('')
  const [assetProfile, setAssetProfile] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  let quoteSummary = `https://yfapi.net/v11/finance/quoteSummary/${choice}`

  let options = {
    method: 'GET',
    mode: "cors",
    url: quoteSummary,
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': `${API_KEY}`
    }
  };

  const onChange = (e) => {
    setChoice(e.target.value)
  }

  const handleClick = async (e) => {
    setIsLoading(true)
    setKeyStats('')
    setAssetProfile('')
    // setChoice(e.target.value)
    
    await axios.request(options)
    .then(function (response) {
      console.log(response.data.quoteSummary.result[0].defaultKeyStatistics);
      setKeyStats(response.data.quoteSummary.result[0].defaultKeyStatistics)
      setAssetProfile(response.data.quoteSummary.result[0].assetProfile)
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
              <h1>Search Stock, ETF, Crypto</h1>
              <input 
                value={choice}
                onChange={onChange}
                className="border-2 p-2"
              /> 
               <button 
                onClick={handleClick}
                className="pt-4 pb-4 pl-6 pr-6 font-bold ml-4 rounded-xl bg-sky-600 text-white"
              >
                Search Summary
              </button>

                


              {(!keyStats && !assetProfile && isLoading) ? 
              <>
             <div className="w-full flex mt-10 justify-center">
                <div className="flex h-96 shadow-xl bg-slate-700 mr-10 rounded-xl">
                  <div className="animate-pulse flex flex-col w-96 justify-between p-4 ">
                    <div className="font-bold text-xl w-32 text-left text-center h-8 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-1/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-2/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-2/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-1/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-1/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-2/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>                 
                  </div>
                </div>
                <div className="flex h-96 shadow-xl bg-slate-700 rounded-xl">
                  <div className="animate-pulse flex flex-col w-96 justify-between p-4 ">
                    <div className="font-bold text-xl w-32 text-left text-center h-8 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-1/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-2/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-2/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-1/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                    <div className="flex justify-between">
                      <div className="font-bold text-xl w-1/3 mr-3 text-center h-3 bg-slate-300 rounded"></div>
                      <div className="font-bold text-xl w-2/3 ml-3 text-center h-3 bg-slate-300 rounded"></div>
                    </div>
                    <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>                 
                  </div>
                </div>
              </div>

                <div className="flex flex-col">
                  <h1 className="text-2xl w-full text-center text-slate-700">Loading...</h1> 
                </div>
             </>

              :

            <div className="w-full flex-col">
                <div className="w-full flex justify-center">
                  <div key={Math.random()} className="w-1/2 p-5 m-3 w-96 rounded-md bg-white flex flex-col overflow-hidden">
                    <h1 className="text-2xl font-bold mt-2 mb-2">Key Statistics</h1>
                    <div>
                      <h1 className="flex justify-between"><span className="font-bold">BV: </span> {keyStats['bookValue'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">52 Wk Change: </span>{keyStats['52WeekChange'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Forward PE: </span> {keyStats['forwardPE'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Dividends: </span> {keyStats['lastDividendValue'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">PB: </span> {keyStats['priceToBook'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Margins: </span> {keyStats['profitMargins'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">EPS: </span> {keyStats['trailingEps'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">EBITDA: </span> {keyStats['enterpriseToEbitda'].fmt}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Beta: </span> {keyStats['beta'].fmt}</h1>
                    </div>

                    <div className="mt-10">
                      <a href={assetProfile['website']} className="text-sky-500 underline">{assetProfile['website']}</a>
                      <h1 className="flex justify-between"><span className="font-bold">Industry: </span>{assetProfile['industry']}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Sector: </span>{assetProfile['sector']} </h1>
                      <h1 className="flex justify-between"><span className="font-bold">Employees: </span> {assetProfile['fullTimeEmployees']}</h1>
                    </div>
                  </div>


                <div key={Math.random()} className="bg-white flex flex-col w-1/2 p-5 m-3 w-96 rounded-md shadow-md">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold mt-2 mb-2">Top Executives</h1>
                    <div>
                      <h1 className="flex justify-between"><span className="font-bold">Name: </span>{assetProfile['companyOfficers'][0].name}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Title: </span>{assetProfile['companyOfficers'][0].title}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Age: </span> {assetProfile['companyOfficers'][0].age}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Salary: </span> {
                        !assetProfile['companyOfficers'][0].totalPay ? 'unknown' : assetProfile['companyOfficers'][0].totalPay.fmt }
                      </h1>
                    </div>
                    <div>
                      <h1 className="flex justify-between"><span className="font-bold">Name: </span>{assetProfile['companyOfficers'][1].name}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Title: </span>{assetProfile['companyOfficers'][1].title}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Age: </span> {assetProfile['companyOfficers'][1].age}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Salary: </span> {
                        !assetProfile['companyOfficers'][1].totalPay ? 'unknown' : assetProfile['companyOfficers'][1].totalPay.fmt }
                      </h1>
                    </div>
                    <div>
                      <h1 className="flex justify-between"><span className="font-bold">Name: </span>{assetProfile['companyOfficers'][2].name}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Title: </span>{assetProfile['companyOfficers'][2].title}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Age: </span> {assetProfile['companyOfficers'][2].age}</h1>
                      <h1 className="flex justify-between"><span className="font-bold">Salary: </span> {
                        !assetProfile['companyOfficers'][2].totalPay ? 'unknown' : assetProfile['companyOfficers'][2].totalPay.fmt }
                      </h1>
                    </div>
                  </div>
                </div>
                </div>
              <h1 className="w-full p-10 bg-white mt-3 rounded-md">{assetProfile['longBusinessSummary']}</h1>
            </div>
            
            }    
                
            </div>

        </div>
    </div>
  )
}
export default Search