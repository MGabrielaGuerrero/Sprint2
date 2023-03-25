import './styles.css'
import Header from './components/header/Headers'
import Filter from './components/filter/Filter'
import Cards from './components/cards/Cards'
import { hotelsData } from './statics/data'
import { useState } from 'react'

export default function App() {

  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sizeHotels, setSizeHotels] = useState("todos");
  const [countryHotel, setCountryHotel] = useState("todos")
  const [priceHotel, setPriceHotel] = useState("todos")

  const hotelesFilter = (hotelsData) => {
    const hotelesFilterData = hotelsData.filter((hotelData) => {
      if (dateFrom && dateTo) {
        const dateFromFilter = new Date(dateFrom).getTime()
        const dateToFilter = new Date(dateTo).getTime()

        if (
          hotelData.availabilityFrom >= dateFromFilter &&
          hotelData.availabilityTo >= dateToFilter
        )
          return hotelData
        else return null
      } else return hotelData
    })
      .filter((hotelData) => {
        if (sizeHotels === "pequeño") {
          return hotelData.rooms <= 10
        } else if (sizeHotels === "mediano") {
          return hotelData.rooms > 10 && hotelData.rooms <= 20;
        } else if (sizeHotels === "grande") {
          return hotelData.rooms > 20;
        }
        return hotelData
      })
      .filter((hotelData) => {
        if (countryHotel !== "todos") {
          return hotelData.country === countryHotel;
        }
        return hotelData;
      })
      .filter((hotelData)=>{
        if (priceHotel !== "todos"){
          return hotelData.price === Number(priceHotel)
        }
        return hotelData;
      })
    return hotelesFilterData
  }

  const hotelsNew = hotelesFilter(hotelsData)
  console.log('🚀 ~ file: App.js:29 ~ App ~ hotelsNew:', hotelsNew)


  return (
    <div className="App">
      <Header />
      <Filter
        dateFrom={dateFrom}
        dateTo={dateTo}
        sizeHotels={sizeHotels}
        countryHotel={countryHotel}
        priceHotel={priceHotel}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        setSizeHotels={setSizeHotels}
        setCountryHotel={setCountryHotel}
        setPriceHotel={ setPriceHotel}
      />
      <Cards hotelsNew={hotelsNew} />
    </div>
  )
}
