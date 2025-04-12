import React from 'react'

interface WeatherInfoProps {
  temperature: string
  city: string
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  temperature,
  city,
}) => {
  return (
    <>
      <h1 className="mt-6 mb-2 text-6xl font-bold text-white sm:text-7xl">
        {temperature}
      </h1>
      <h2 className="mb-8 text-3xl font-light text-white sm:text-4xl">
        {city}
      </h2>
    </>
  )
}
