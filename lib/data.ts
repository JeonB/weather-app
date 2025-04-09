export interface WeatherData {
  weather: string
  temperature: number
  humidity: number
  windSpeed: number
  city: string
  iconCode: string
}

export async function fetchData(query: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    )

    if (response.status === 404) {
      throw new Error('존재하지 않는 도시입니다')
    }

    if (!response.ok) {
      throw new Error(`날씨 API 오류: ${response.status}`)
    }

    const data = await response.json()

    return {
      weather: data.weather[0].main,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      city: data.name,
      iconCode: data.weather[0].icon,
    }
  } catch (error) {
    console.error('날씨 데이터 가져오기 오류:', error)
    throw error
  }
}
