import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex h-screen items-center justify-center bg-amber-500">
        상품 페이지
      </div>
    </>
  )
}
