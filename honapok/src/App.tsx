import { months } from "../lib/content"
import Footer from "./components/Footer"
import MonthCard from "./components/MonthCard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="w-full min-h-screen bg-amber-200">
      <Navbar />
      <section className="mt-6 grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-[75%] mx-auto pb-16">
        {months.map((month) => (
          <MonthCard key={month.name} month={month} />
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default App
