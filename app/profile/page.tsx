import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex h-screen items-center justify-center bg-blue-300 md:w-screen">
        프로필 페이지
      </div>
    </>
  )
}
