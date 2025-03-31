'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// async function fetchData() {
//   const response =
//     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}
// `);
//   const data = await response.json();
//   return data;
// }

export default function Home() {
  // const data = await fetchData();
  // console.log(data.weather);

  const router = useRouter()
  const handleClick = () => {
    router.push('/product')
  }
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Link href="/board">보드로 가보자잇</Link>
      <a href="/profile">프로필로 가보자잇</a>
      <button onClick={handleClick} className="cursor-pointer">
        상품 페이지로 가보자잇
      </button>
    </div>
  )
}
