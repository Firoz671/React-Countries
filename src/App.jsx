import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const fetchCountries = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  return res.json()
}

function App() {
const fetchedCountries = fetchCountries()
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
      
      <Countries fetchedCountries={fetchedCountries}></Countries>
      </Suspense>
    </div>
  )
}

export default App
