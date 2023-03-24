import './styles.css'
import Header from './components/header/Headers'
import Filter from './components/filter/Filter'
import Cards from './components/cards/Cards'
import { hotelsData } from './statics/data'
import { useState } from 'react'

export default function App() {
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

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
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
      />
      <Cards hotelsNew={hotelsNew} />
    </div>
  )
}
