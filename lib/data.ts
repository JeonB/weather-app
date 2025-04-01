export async function fetchData() {
  const response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}
  `)
  const data = await response.json()
  return data
}
