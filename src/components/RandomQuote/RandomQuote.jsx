import React, { useState } from 'react'
import './RandomQuote.css'

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author:"Johann Wolfgang von Geothe",
  })
  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="buttom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <button>?</button>
            <button>/</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote