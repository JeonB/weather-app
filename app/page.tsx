import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/weather">날씨</Link>
    </div>
  )
}
