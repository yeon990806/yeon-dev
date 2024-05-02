'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound () {
  const router = useRouter();

  return (
    <main className="error flex justify-center flex-col">
      <h1 className="text-5xl text-blue-500 font-extrabold tracking-widest">404</h1>
      <h2 className="mt-2 text-light-gray600 text-lg">
        페이지를 찾을 수 없어요. <br />
        <Link
          href="/"
          className="underline underline-offset-2"
        >
          메인페이지
        </Link>
        또는 &nbsp;
        <span
          className="underline cursor-pointer underline-offset-2"
          onClick={() => router.back()}
        >
          이전 페이지
        </span>
        로 이동하는 건 어떨까요?
      </h2>
    </main>
  )
}