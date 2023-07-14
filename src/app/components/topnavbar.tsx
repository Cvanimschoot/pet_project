import Link from "next/link"

export default function Topnavbar() {
  return (
    <div className="flex">
      <div className="bg-yellow-200 w-[9.75%] h-[5rem]">

      </div>
      <div className="bg-yellow-200 w-[80%] h-[5rem] rounded-r-2xl border-r-4 border-b-4 border-black flex flex-row-reverse p-8 text-black text-2xl items-center">
        <Link href='/'><p className="hover:text-red-950"><b>Login</b></p></Link>
      </div>
    </div>
  )
}