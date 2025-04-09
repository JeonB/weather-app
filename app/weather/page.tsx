'use client'
import React, { useEffect, useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherIcon } from './components/WeatherIcon'
import { WeatherInfo } from './components/WeatherInfo'
import { WeatherDetails } from './components/WeatherDetails'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchData, WeatherData } from '../../lib/data'

export default function WeatherPage() {
  const [searchValue, setSearchValue] = useState('bangalore')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [errorShown, setErrorShown] = useState(false)
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['weather', searchValue],
    queryFn: async () => {
      try {
        const data = await fetchData(searchValue)
        setWeatherData(data)
        setErrorShown(false) // 성공적으로 데이터를 가져오면 오류 표시 상태 초기화
        return data
      } catch (error) {
        // 오류가 이미 표시되었는지 확인
        if (!errorShown) {
          if (
            error instanceof Error &&
            error.message === '존재하지 않는 도시입니다'
          ) {
            alert('존재하지 않는 도시입니다')
          } else {
            console.error('날씨 데이터 가져오기 오류:', error)
            alert('날씨 데이터를 가져오는 중 오류가 발생했습니다.')
          }
          setErrorShown(true) // 오류가 표시되었음을 기록
        }
        throw error
      }
    },
    enabled: false, // 비활성화: 자동으로 쿼리 실행하지 않음
    retry: false, // 오류 발생 시 재시도하지 않음
  })

  // 초기 데이터 로드
  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = () => {
    // 쿼리 무효화 및 강제 리페치
    queryClient.invalidateQueries({ queryKey: ['weather', searchValue] })
    query.refetch()
  }

  const handleRefresh = () => {
    handleSearch()
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
            <WeatherIcon
              onRefresh={handleRefresh}
              iconCode={weatherData?.iconCode}
            />
            <WeatherInfo
              temperature={
                weatherData ? `${weatherData.temperature}°C` : '--°C'
              }
              city={weatherData?.city || searchValue}
            />
            <WeatherDetails
              humidity={weatherData ? `${weatherData.humidity}%` : '--%'}
              windSpeed={
                weatherData ? `${weatherData.windSpeed} km/h` : '-- km/h'
              }
            />
          </div>
          {/* Next: "Add daily forecast cards below with min/max temperatures" */}
          {/* Next: "Add air quality index indicator" */}
        </div>
      </div>
    </div>
  )
}
