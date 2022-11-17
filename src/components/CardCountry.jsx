import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CardCountry () {

    const [country, setCountry] = useState()

    useEffect(() => {
      const URL = 'https://restcountries.com/v3.1/name/mexico'
      axios.get(URL)
        .then(res => setCountry(res.data[0]))
        .catch(err => console.log(err))
    }, [])

    console.log(country)
    
  return (
    <article className='card'>
        <img src={country?.flags.png} alt="" />
       <h1>{country?.flag}</h1>
       <h3>{country?.name.nativeName.spa.official}</h3>
       <h3>{country?.timezones[0]}</h3> 
    </article>
  )
}

export default CardCountry