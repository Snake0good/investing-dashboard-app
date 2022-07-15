import Header from "../components/Header"
import Navbar from "../components/Navbar"
import CardLineChart from "../components/CardLineChart"
import {useLocation} from 'react-router'

function Charts() {
  const userName = "Jacob Good"
  let location = useLocation()

  const colorChoice = () => {
    let colorArr = ['blue', 'green', '#390099', '#9e0059', '#ff0054', '#ef476f', '#118ab2', '#0f4c5c']
    let num = Math.floor((Math.random() * colorArr.length))
    return colorArr[num]
  }

  return (
    <div className="flex">
        <Navbar />
        <div className="p-5 w-full min-h-screen bg-sky-200 pl-44">
            <Header title={location.state.title} total={location.state.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} userName={location.state.userName}/>
            
            {/* all graphs below */}
            <div className=" mt-2 pl-6 flex flex-wrap">
                {/* top graph */}
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Coca Cola' 
                            totalValue='514.85' 
                            dataSet={[400, 395, 390, 405, 403, 600, 621, 595, 450, 475, 620, 514]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Amazon' 
                            totalValue='109.22' 
                            dataSet={[170, 160, 176, 160, 170, 180, 170, 140, 160, 140, 105, 109]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Tesla' 
                            totalValue='714.21' 
                            dataSet={[650, 672, 735, 764, 1234, 1154, 1230, 1000, 900, 1121, 750, 714]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Netflix' 
                            totalValue='174.33' 
                            dataSet={[538, 514, 535, 568, 630, 670, 591, 540, 483, 204, 196, 174]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Microsoft' 
                            totalValue='254.21' 
                            dataSet={[285, 300, 290, 300, 320, 340, 350, 342, 320, 290, 241, 254]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Oracle' 
                            totalValue='69.45' 
                            dataSet={[58, 59, 63, 64, 69, 72, 79, 80, 70, 64, 62, 69.45]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Boss' 
                            totalValue='11.15' 
                            dataSet={[11.5, 12, 11.2, 12, 12.8, 13, 12, 11.7, 11.6, 9.2, 11, 11.15]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Nike' 
                            totalValue='102.22' 
                            dataSet={[69, 83, 81, 93, 98, 102, 115, 85, 103, 98, 99, 102]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Under Armor' 
                            totalValue='13.85' 
                            dataSet={[18, 12, 15, 14, 17, 11, 9, 11, 7, 6, 10, 13]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                <div className=" w-1/2 p-3">
                    <div className="w-full bg-white h-96 rounded-xl p-3 rounded-xl shadow-xl">
                        <CardLineChart 
                            title='Nvidia' 
                            totalValue='234.85' 
                            dataSet={[588, 678, 568, 644, 690, 790, 791, 800, 703, 622, 624, 234]} 
                            chartColor={colorChoice()}
                            />
                    </div>
                </div>
                
                
            </div>

        </div>
    </div>
  )
}
export default Charts