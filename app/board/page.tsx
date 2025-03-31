import Link from 'next/link'

export default function Board() {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex h-screen items-center justify-center bg-cyan-500">
        게시판 페이지
      </div>
    </>
  )
}
