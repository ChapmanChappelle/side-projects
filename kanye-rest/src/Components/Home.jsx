import React, { useEffect, useState } from "react"
import "./Home.css"
export const Home = () => {
   const [quote, setQuote] = useState({})

   useEffect(() => {
      getQuote()
   }, [])

   const getQuote = async () => {
      const response = await fetch("https://api.kanye.rest/")
      const data = await response.json()

      setQuote(data)
      return "success"
   }

   return (
      <div id="container">
         <div id="header">
            <h1>Kanye Rest API</h1>
         </div>
         <button onClick="getQuote()" id="getQuoteBtn">Ye Quote</button>
         <p id="quoteTxt">{quote.quote}</p>
      </div>
   )
}

export default Home
