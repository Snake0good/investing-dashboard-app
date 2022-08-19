import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import { useState } from "react"

import axios from 'axios'
import { useEffect } from "react"

const API_TOKEN = process.env.REACT_APP_API_TOKEN_NEWS

function Bonds() {
  let location = useLocation()
  const [financeNews, setFinanceNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let stockData = `https://api.stockdata.org/v1/news/all?limit=10&language=en&api_token=${API_TOKEN}`

  /// hidden as well
  let options = {
    method: 'GET',
    mode: "cors",
    url: stockData,
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': `${API_TOKEN}`
    }
  };


  const handleClick = async (e) => {
    setIsLoading(true)
    // setChoice(e.target.value)
    
    await axios.request(options)
    .then(function (response) {
      console.log('is this is', response.data.data[0])

      // stockdata.org calls
      console.log(response.data.data)
      setFinanceNews(response.data.data);
      setIsLoading(false)
    })
    .catch(function (error) {
      console.error(error);
    });
        
  }

  useEffect(() => {
    handleClick()
  }, [])
  

  // DUMMY NEWS
  const dummyNews = [
    {
      image_url: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Handle the Markets Ups and Downs',
      snippet: 'Moriano sapiente culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus.',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Are You Ready for the Bear?',
      snippet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet non natus saepe ab tenetur.',
      url: 'https://www.google.com'
    },
    
    {
      image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Bull in 2022. 100%!',
      snippet: 'Salor sapiente culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! Nulla, ad at?',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Doable News you will not Read',
      snippet: 'Salor sapiente culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! ',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1554260570-c7068c223285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'I Have Reached My API Call Limit',
      snippet: 'Culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! Nulla, ad at.',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1554260570-c7068c223285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'I Have Reached My API Call Limit',
      snippet: 'Culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! Nulla, ad at.',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1554260570-c7068c223285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jaWFsJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'I Have Reached My API Call Limit',
      snippet: 'Culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! Nulla, ad at.',
      url: 'https://www.google.com'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1499566727020-881da110a0b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2lhbCUyMG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      title: 'DUMMY NEWS',
      snippet: 'Sapiente culpa mollitia veritatis, aliquid eum accusantium unde quam! Delectus, ducimus consequatur! Nulla, ad at!',
      url: 'https://www.google.com'
    }
  ]






  return (
    <div className="flex">
        <Navbar />
        <div className="p-5 w-full bg-sky-200 pl-44 min-h-screen">
            <Header title={location.state.title} total={location.state.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} userName={location.state.userName}/>
            
            {/* all graphs below */}
            <div className=" mt-2 pl-6">
                <div className="flex w-full flex-wrap">

                {isLoading ? 
             <>
              <div className="w-1/2 p-2">
                  <div className="animate-pulse flex w-full shadow-xl m-3 bg-slate-700 rounded-xl flex h-64 w-full p-2 rounded-xl">
                    <div className="flex w-full justify-between  pl-4 pr-4 ">
                      <div className="font-bold text-xl w-1/2 text-center h-full bg-slate-300 rounded"></div>
                      <div className="w-1/2 p-3 space-y-4">
                        <div className="font-bold text-xl w-full text-center h-8 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                      </div>
                    </div>
                  </div>
              </div>
              <div className="w-1/2 p-2">
                  <div className="animate-pulse flex w-full shadow-xl m-3 bg-slate-700 rounded-xl flex h-64 w-full p-2 rounded-xl">
                    <div className="flex w-full justify-between  pl-4 pr-4 ">
                      <div className="font-bold text-xl w-1/2 text-center h-full bg-slate-300 rounded"></div>
                      <div className="w-1/2 p-3 space-y-4">
                        <div className="font-bold text-xl w-full text-center h-8 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                        <div className="font-bold text-xl w-full text-center h-3 bg-slate-300 rounded"></div>
                        <div className="font-bold text-xl w-5/6 text-center h-3 bg-slate-300 rounded"></div>                   
                      </div>
                    </div>
                  </div>
              </div>
              <h1 className="text-2xl w-full text-center text-slate-700">Loading Articles...</h1> 
             </>
              : null }

                  {financeNews && financeNews.map((article) => {
                  return (
                  <div className="w-1/2 p-2">
                    <div 
                      key={article.uuid}
                      className="flex h-64 bg-white w-full p-2 rounded-xl hover:scale-110 hover:shadow-xl ease-in duration-200"
                      >
                      <img className="w-1/2 p-3 rounded-xl object-cover" src={article.image_url} alt='article pic' />
                      <div className="w-1/2 p-2">
                        <h1 className="text-xl font-bold">{article.title}</h1>
                        <h1 className="text-sm">{article.snippet}</h1>
                        <a className="text-blue-500" href={article.url}>Read More...</a>
                      </div>
                    </div>
                  </div>
                  )})}
                  
                  {/* DUMMY NEWS BELOW JUST TO FILL SPACE */}
                  {!isLoading && dummyNews.map((article) => {
                  return (
                  <div 
                    key={article.uuid}
                    className="flex h-64 bg-white w-full p-2 m-2 rounded-xl w-96 hover:scale-110 hover:shadow-xl ease-in duration-200"
                  >
                    <img className="w-1/2 p-3 rounded-xl object-cover" src={article.image_url} alt='article pic' />
                    <div className="w-1/2 p-2">
                      <h1 className="text-xl font-bold">{article.title}</h1>
                      <h1 className="text-sm">{article.snippet}</h1>
                      <a className="text-blue-500" href={article.url}>Read More...</a>
                    </div>
                  </div>
                  )})}
                </div>
                
            </div>

        </div>
    </div>
  )
}
export default Bonds