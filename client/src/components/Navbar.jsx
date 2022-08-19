import { FaBriefcase, FaChartLine, FaDollarSign, FaHome, FaMoneyBillWave } from 'react-icons/fa'
import investureLogo from '../images/investure-logo.png'
import invest from '../images/invest.svg'
import {NavLink} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

function Navbar() {
    const activeClassName = 'w-full font-bold cursor-pointer flex space-x-4 p-4 pt-6 pb-6 text-black rounded-l-xl bg-sky-200 place-items-center shadow-[-8px_8px_7px_1px_rgba(0,0,0,0.2)]'
    const notActiveClassName = 'w-full cursor-pointer flex space-x-4 p-4 pb-6 pt-6 text-gray-500 rounded-l-xl hover:bg-sky-200 place-items-center'

    const location = useLocation()


    // default parameters if none are given
    let userName = "User Name"
    let stocks = 123.45
    let ETF = 123.45
    let crypto = 123.45
    let bonds = 123.45
    
    let total = (stocks + ETF + crypto + bonds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    // get the stocks 
    stocks=location.state.stocks
    ETF=location.state.ETF 
    crypto=location.state.crypto
    bonds=location.state.bonds
    total= location.state.total
    userName=location.state.userName


  return (
    <div className="w-44 bg-sky-100 h-screen flex flex-col pt-3 pl-3 pb-3 fixed justify-around">
        <div>
            <h1 className='flex text-3xl'>
                {/* <FaAccusoft /> investure */}
                <div className='flex justify-center m-0'>
                    <img src={investureLogo} className='w-1/2 text-center' alt='logo' />
                </div>
            </h1>
            <ul className='flex flex-col w-full'>
                <NavLink 
                    to="/dashboard" 
                    state={{title:"Dashboard",total,userName, stocks, ETF, crypto, bonds}}
                    className={({ isActive }) => isActive ? activeClassName : notActiveClassName }>
                    <FaHome /> 
                    <h1>Dashboard</h1>
                </NavLink>
                <NavLink 
                    to='/markets'
                    state= {{title:"Domestic and International Markets", userName, total}}
                    className={({ isActive }) => isActive ? activeClassName : notActiveClassName }>
                    <FaBriefcase /> 
                    <h1>Markets</h1>
                </NavLink>
                <NavLink 
                    to="/news" 
                    state= {{title:"Market News", userName, total}}
                    className={({ isActive }) => isActive ? activeClassName : notActiveClassName }>
                    <FaDollarSign /> 
                    <h1>News</h1>
                </NavLink>
                <NavLink 
                    to="/search" 
                    state= {{title:"Search", userName, total}}
                    className={({ isActive }) => isActive ? activeClassName : notActiveClassName }>
                    <FaMoneyBillWave /> 
                    <h1>Search</h1>
                </NavLink>
                <NavLink 
                    to="/charts"
                    state= {{title:"Charts", userName, total}} 
                    className={({ isActive }) => isActive ? activeClassName : notActiveClassName }>
                    <FaChartLine /> 
                    <h1>Charts</h1>
                </NavLink>
            </ul>
        </div>
        

        <img src={invest} alt="finance" className='w-full pr-3' />

        <a href="https://www.jacobegood.com" className='bg-white pt-3 pb-3 mr-4 text-center rounded-lg shadow-lg hover:shadow-sm hover:scale-95 hover:bg-gray-100'>Contact Advisor</a>
        
    </div>
  )
}
export default Navbar