import React from 'react'

interface WeatherIconProps {
  onRefresh?: () => void
  iconCode?: string
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  onRefresh,
  iconCode,
}) => {
  // 기본 아이콘 (맑은 날씨)
  const defaultIcon = (
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
  )

  // 아이콘 코드에 따라 다른 아이콘을 반환하는 함수
  const getWeatherIcon = () => {
    if (!iconCode) return defaultIcon

    // OpenWeatherMap 아이콘 코드에 따라 다른 아이콘을 반환
    // 아이콘 코드 형식: "01d" (맑은 날씨, 낮), "02n" (구름 조금, 밤) 등
    const prefix = iconCode.substring(0, 2)
    const isDay = iconCode.endsWith('d')

    switch (prefix) {
      case '01': // 맑은 날씨
        return defaultIcon
      case '02': // 구름 조금
        return (
          <div className="relative h-24 w-24">
            <svg
              className="absolute h-24 w-24 text-yellow-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <circle cx="12" cy="12" r="5" fill="#FFA500" />
            </svg>
            <svg
              className="absolute h-24 w-24 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
        )
      case '03': // 구름 많음
        return (
          <svg
            className="h-24 w-24 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        )
      case '04': // 흐림
        return (
          <svg
            className="h-24 w-24 text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        )
      case '09': // 가벼운 비
        return (
          <div className="relative h-24 w-24">
            <svg
              className="absolute h-24 w-24 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <svg
              className="absolute bottom-0 left-0 h-12 w-24 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
        )
      case '10': // 비
        return (
          <div className="relative h-24 w-24">
            <svg
              className="absolute h-24 w-24 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <svg
              className="absolute bottom-0 left-0 h-12 w-24 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
        )
      case '11': // 천둥번개
        return (
          <div className="relative h-24 w-24">
            <svg
              className="absolute h-24 w-24 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <svg
              className="absolute bottom-0 left-0 h-12 w-24 text-yellow-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
          </div>
        )
      case '13': // 눈
        return (
          <div className="relative h-24 w-24">
            <svg
              className="absolute h-24 w-24 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <svg
              className="absolute bottom-0 left-0 h-12 w-24 text-white"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M22 11h-4.17l3.24-3.24-1.41-1.41L15 11h-2V9l4.66-4.66-1.41-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.41L9 13h2v2l-4.66 4.66 1.41 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.41-1.41L13 15v-2h2l4.66 4.66 1.41-1.41L17.83 13H22z" />
            </svg>
          </div>
        )
      case '50': // 안개
        return (
          <svg
            className="h-24 w-24 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        )
      default:
        return defaultIcon
    }
  }

  return (
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-110">
      {getWeatherIcon()}
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
