
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './Countries'

function App() {
  const [countries,setCountries] = useState([]);
  useEffect(() =>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>setCountries(data))
  },[])
  return (
    <>
      <h1>React World Tour : {countries.length}</h1>
      <Countries/>
    </>
  )
}

export default App
