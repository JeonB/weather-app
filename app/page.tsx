'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetchData } from '../lib/data'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

export default function Home() {
  const router = useRouter()
  const renderCount = useRef(0)

  const handleClick = () => {
    router.push('/product')
  }

  const query = useQuery({
    queryKey: ['weather'],
    queryFn: fetchData,
  })

  useEffect(() => {
    renderCount.current += 1
    console.log(`렌더링 횟수: ${renderCount.current}회`)
  })

  console.log(query.data?.weather)
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div>렌더링 횟수: {renderCount.current}회</div>
      <Link href="/board">보드로 가보자잇</Link>
      <a href="/profile">프로필로 가보자잇</a>
      <button onClick={handleClick} className="cursor-pointer">
        상품 페이지로 가보자잇
      </button>
    </div>
  )
}
