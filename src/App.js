import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import All_country_details from './components/All_country_details';

function App() {

  const [country, setCountry] = useState([])


  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchnews()
      setCountry(newsFromServer)
    }
   
    getNews()
  }, [])
    //Fetch Tasks from db.json
    const fetchnews = async () => {
      const res = await fetch('https://restcountries.com/v2/all')
      const data = await res.json()

      return data
      
    }
  return (
    <div  className='container'>
      <Header />
      <All_country_details country = { country } />
    </div>
  );
}

export default App;
