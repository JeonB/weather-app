import React from 'react'

interface WeatherDetailsProps {
  humidity: string
  windSpeed: string
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  humidity,
  windSpeed,
}) => {
  return (
    <div className="mt-2 flex w-full items-start justify-between px-2 sm:px-4">
      <div className="flex flex-col items-center">
        <svg
          className="mb-1 h-8 w-8 text-white opacity-80 sm:h-10 sm:w-10 md:h-12 md:w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5">
          <path d="M3 10C3 10 6 4 12 4C18 4 21 10 21 10" />
          <path d="M3 14C3 14 6 20 12 20C18 20 21 14 21 14" />
          <path d="M12 12H12.01" />
          <path d="M12 8H12.01" />
          <path d="M12 16H12.01" />
        </svg>
        <span className="text-4xl font-bold text-white">{humidity}</span>
        <span className="text-sm text-white opacity-80 sm:text-base md:text-xl">
          Humidity
        </span>
      </div>

      <div className="flex w-1/2 flex-col items-center pl-2">
        <svg
          className="mb-1 h-8 w-8 text-white opacity-80 sm:h-10 sm:w-10 md:h-12 md:w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
        <span className="text-2xl font-bold whitespace-nowrap text-white sm:text-3xl md:text-4xl">
          {windSpeed}
        </span>
        <span className="text-sm text-white opacity-80 sm:text-base md:text-xl">
          Wind Speed
        </span>
      </div>
    </div>
  )
}
