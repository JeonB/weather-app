import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherIcon } from './components/WeatherIcon'
import { WeatherInfo } from './components/WeatherInfo'
import { WeatherDetails } from './components/WeatherDetails'

export const Component = () => {
  const [searchValue, setSearchValue] = useState('bangalore')

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchValue)
  }

  const handleRefresh = () => {
    // TODO: Implement refresh functionality
    console.log('Refreshing weather data')
  }

  return (
    <div id="webcrumbs">
      <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
        <div className="from-primary-400 to-primary-600 relative h-auto w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br p-5 shadow-xl lg:max-w-lg">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
          />

          <div className="mt-4 flex flex-col items-center">
            <WeatherIcon onRefresh={handleRefresh} />
            <WeatherInfo temperature="22°c" city="Bengaluru" />
            <WeatherDetails humidity="53%" windSpeed="5.66 km/h" />
          </div>
          {/* Next: "Add daily forecast cards below with min/max temperatures" */}
          {/* Next: "Add air quality index indicator" */}
        </div>
      </div>
    </div>
  )
}
