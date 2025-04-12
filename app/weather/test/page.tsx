// weather-app/app/weather/test/page.tsx
'use client'
import React from 'react'
import { WeatherIcon } from '../components/WeatherIcon'

export default function WeatherIconTest() {
  // OpenWeatherMap API 아이콘 코드 목록
  const iconCodes = [
    '01d',
    '01n', // 맑음 (낮/밤)
    '02d',
    '02n', // 구름 조금 (낮/밤)
    '03d',
    '03n', // 구름 많음
    '04d',
    '04n', // 흐림
    '09d',
    '09n', // 가벼운 비
    '10d',
    '10n', // 비
    '11d',
    '11n', // 천둥번개
    '13d',
    '13n', // 눈
    '50d',
    '50n', // 안개
  ]

  return (
    <div className="p-8">
      <h1 className="mb-8 text-2xl font-bold">날씨 아이콘 테스트</h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {iconCodes.map(code => (
          <div key={code} className="flex flex-col items-center">
            <WeatherIcon iconCode={code} />
            <p className="mt-2 font-medium">{code}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
