import { FaAmazon, FaApple, FaBell, FaBriefcase, FaCar, FaDollarSign, FaImdb, FaMoneyBillWave, FaNewspaper, FaShopify } from "react-icons/fa"
import CardBarChart from "../components/CardBarChart"
import CardLineChart from "../components/CardLineChart"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'

function Dashboard() {
    const location = useLocation()

    let userName = "User Name"
    let stocks = 123.45
    let ETF = 123.45
    let crypto = 123.45
    let bonds = 123.45
    let total = (stocks + ETF + crypto + bonds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    
    let title=location.state.title

    stocks=location.state.stocks || stocks
    ETF=location.state.ETF || ETF
    crypto=location.state.crypto || crypto
    bonds=location.state.bonds || bonds
    total=location.state.total || total
    userName=location.state.userName || userName
    

  return (
    <div className="flex">
        <Navbar />
        <div className="p-5 w-full bg-sky-200 pl-44">
            <Header title={title} total={total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} userName={userName}/>
            
            {/* all graphs below */}
            <div className=" mt-2 pl-6">

                {/* top graph */}
                
                <div className=" w-full bg-white h-96 mt-3 mb-3 rounded-xl p-3 rounded-xl shadow-xl">
                    <CardLineChart 
                        title='Total Invested Value' 
                        totalValue={total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} 
                        dataSet={[
                            total*0.85, 
                            total*0.95, 
                            total*1, 
                            total*1.25, 
                            total*1.30, 
                            total*1.65, 
                            total*1.55, 
                            total*1.20, 
                            total*1.05, 
                            total*.75, 
                            total*0.85, 
                            total
                        ]}
                        chartColor='#003566'
                    />
                </div>
                <div className=" w-full flex justify-evenly">
                    <div className="p-3 bg-white shadow-xl w-64 relative rounded-xl mr-2 flex flex-col space-y-1">
                        <div className="p-3 absolute top-5 right-4 bg-blue-500 rounded-full">
                            <FaBriefcase className="text-white text-2xl" />
                        </div>
                        <h1 className="font-bold text-gray-500">Stocks</h1>
                        <h1 
                            className="text-xl font-bold">${(stocks).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                        </h1>
                        <p className="text-green-500">+3.95% <span className="text-gray-500">/month</span></p>
                    </div> 
                    <div className="p-3 bg-white shadow-xl w-64 relative rounded-xl mr-2 flex flex-col space-y-1">
                        <div className="p-3 absolute top-5 right-4 bg-red-500 rounded-full">
                            <FaNewspaper className="text-white text-2xl" />
                        </div>
                        <h1 className="font-bold pl-4 text-gray-500">ETFs</h1>
                        <h1 className="text-xl font-bold">${(ETF).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                        <p className="text-green-500">+9.23% <span className="text-gray-500">/month</span></p>
                    </div>
                    <div className="p-3 bg-white shadow-xl w-64 relative rounded-xl mr-2 flex flex-col space-y-1">
                        <div className="p-3 absolute top-5 right-4 bg-yellow-500 rounded-full">
                            <FaMoneyBillWave className="text-white text-2xl" />
                        </div>
                        <h1 className="font-bold pl-4 text-gray-500">Crypto</h1>
                        <h1 className="text-xl font-bold">${(crypto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                        <p className="text-red-500">-53.50% <span className="text-gray-500">/month</span></p>
                    </div>
                    <div className="p-3 bg-white shadow-xl w-64 relative rounded-xl mr-2 flex flex-col space-y-1">
                        <div className="p-3 absolute top-5 right-4 bg-green-500 rounded-full">
                            <FaDollarSign className="text-white text-2xl" />
                        </div>
                        <h1 className="font-bold pl-4 text-gray-500">Bonds</h1>
                        <h1 className="text-xl font-bold">${(bonds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
                        <p className="text-green-500">+0.95% <span className="text-gray-500">/month</span></p>
                    </div>
                </div>


                {/* bottom 3 charts */}
                <div className="w-full flex">

                    {/* Notable STOCKS BELOW */}
                    <div className=" w-full mr-5 bg-white h-64 mt-3 mb-3 rounded-xl p-3 rounded-xl shadow-xl overflow-y-auto no-scrollbar">
                        <h1 className="text-2xl font-bold">Notable Stocks</h1>
                        <div className="border border-gray-200 relative w-full h-[70px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex space-x-2">
                                <div className="flex p-3 bg-black h-fit rounded-full">
                                    <FaApple className="text-white text-2xl" />
                                </div>
                                <div className="">
                                        <h1 className="font-bold">Apple</h1>
                                        <p className="text-gray-500">APPL</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">$68.97</h1>
                                <h1 className="text-green-500 font-bold">+10.52%</h1>
                            </div>    
                        </div>
                        <div className="border border-gray-200 relative w-full h-[70px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2">
                            <div className="flex space-x-2">
                                <div className="flex p-3 bg-indigo-500 h-fit rounded-full">
                                    <FaCar className="text-white text-2xl" />
                                </div>
                                <div className="">
                                        <h1 className="font-bold">Tesla Inc.</h1>
                                        <p className="text-gray-500">TSLA</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">$568.97</h1>
                                <h1 className="text-red-500 font-bold">-13.16%</h1>
                            </div>    
                        </div>
                        <div className="border border-gray-200 relative w-full h-[70px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2">
                            <div className="flex space-x-2">
                                <div className="flex p-3 bg-green-500 h-fit rounded-full">
                                    <FaShopify className="text-white text-2xl" />
                                </div>
                                <div className="">
                                        <h1 className="font-bold">Shopify Inc.</h1>
                                        <p className="text-gray-500">SHOP</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">$189.21</h1>
                                <h1 className="text-red-500 font-bold">-24.25%</h1>
                            </div>    
                        </div>
                        <div className="border border-gray-200 relative w-full h-[70px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2">
                            <div className="flex space-x-2">
                                <div className="flex p-3 bg-yellow-500 h-fit rounded-full">
                                    <FaAmazon className="text-white text-2xl" />
                                </div>
                                <div className="">
                                        <h1 className="font-bold">Amazon</h1>
                                        <p className="text-gray-500">AMZN</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">$568.22</h1>
                                <h1 className="text-green-500 font-bold">+3.33%</h1>
                            </div>    
                        </div>
                    </div>


                    {/* LATEST NEWS BELOW */}
                    <div className=" w-full mr-5 bg-white h-64 mt-3 mb-3 rounded-xl p-3 rounded-xl shadow-xl overflow-y-auto no-scrollbar">
                        <h1 className="text-2xl font-bold">Latest News</h1>
                        <div className="border border-gray-200 relative w-full h-[150px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex w-full">
                                <div className="flex">
                                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="crypto" className="w-1/2"/>
                                    <div className="w-1/2 flex flex-col p-2">
                                        <h1 className="text-lg font-bold">Crypto Sinks!</h1>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit...</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="border border-gray-200 relative w-full h-[150px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex w-full">
                                <div className="flex">
                                    <img src="https://images.unsplash.com/photo-1614029655965-2464911905a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="crypto" className="w-1/2 object-cover"/>
                                    <div className="w-1/2 flex flex-col p-2">
                                        <h1 className="text-lg font-bold">Go Away Bear</h1>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit...</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="border border-gray-200 relative w-full h-[150px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex w-full">
                                <div className="flex">
                                    <img src="https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="crypto" className="w-1/2 object-cover"/>
                                    <div className="w-1/2 flex flex-col p-2">
                                        <h1 className="text-lg font-bold">New Regulations</h1>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit...</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="border border-gray-200 relative w-full h-[150px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex w-full">
                                <div className="flex">
                                    <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="crypto" className="w-1/2 object-cover"/>
                                    <div className="w-1/2 flex flex-col p-2">
                                        <h1 className="text-lg font-bold">He Made 500k in 20 mins...</h1>
                                        <p className="text-sm">Cake consectetur adipisicing elit. Vero impedit...</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="border border-gray-200 relative w-full h-[150px] shadow-xl rounded-xl flex justify-between p-2 mt-2 mb-2 mt-2 mb-2">
                            <div className="flex w-full">
                                <div className="flex">
                                    <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="crypto" className="w-1/2 object-cover"/>
                                    <div className="w-1/2 flex flex-col p-2">
                                        <h1 className="text-lg font-bold">The Future of Trading</h1>
                                        <p className="text-sm">Sit amet consectetur adipisicing elit. Vero impedit...</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        


                    </div>



                    {/* DIVIDENDS CHART BELOW */}
                    <div className=" w-full mr-5 bg-white h-64 mt-3 mb-3 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardBarChart />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Dashboard