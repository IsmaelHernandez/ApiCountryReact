import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CardCountry = ({countryName}) => {

    const [country, setCountry] = useState()

    useEffect(() => {
      const URL = `https://restcountries.com/v3.1/name/${countryName}`
      axios.get(URL)
        .then(res => setCountry(res.data[0]))
        .catch(err => console.log(err))
    }, [])

    console.log(country)
    
  return (
    <article className='card'>
      <div className='imgdivcard'>
        <img src={country?.flags.svg} alt="" />
      </div>
      <ul>
        <li><h3>Name: {country?.name.common}</h3></li>
        <li><h3>Language: {country?.languages.spa}</h3></li>
        <li><h3>Capital: {country?.capital[0]}</h3></li>
        <li><h3>Time-Zone: {country?.timezones[0]}</h3></li>
      </ul>
    </article>
  )
}

export default CardCountry