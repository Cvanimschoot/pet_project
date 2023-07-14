import Sidenavbar from "./components/sidenavbar"
import Topnavbar from "./components/topnavbar"

export default function Home() {
  return (
    <main className="bg-[#fefefe]">
      <Topnavbar />
      <Sidenavbar />
    </main>
  )
}
