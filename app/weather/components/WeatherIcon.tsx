import React from 'react'

interface WeatherIconProps {
  onRefresh?: () => void
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ onRefresh }) => {
  return (
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-110">
      <svg
        className="h-24 w-24 animate-pulse text-yellow-400"
        viewBox="0 0 24 24"
        fill="currentColor">
        <circle cx="12" cy="12" r="5" fill="#FFA500" />
        <g>
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="3"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="21"
            x2="12"
            y2="23"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="12"
            x2="3"
            y2="12"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="21"
            y1="12"
            x2="23"
            y2="12"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
      {onRefresh && (
        <div className="absolute -top-1 -right-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span
            className="material-symbols-outlined bg-primary-700 transform rounded-full p-1 text-white transition-transform duration-300 group-hover:rotate-45"
            onClick={onRefresh}>
            refresh
          </span>
        </div>
      )}
    </div>
  )
}
