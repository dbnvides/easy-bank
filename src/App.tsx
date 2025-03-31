import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar"
import Notices from "./components/Notices"

function App() {
  return (
    <main className='bg-zinc-100 w-full min-h-screen overflow-x-hidden text-[#9698A6]'>
      <Navbar />
      <div className="pt-14 h-full relative"> 
        <Header />
        <div className="h-[600px] relative z-20 bg-zinc-200">
          <Cards />
        </div>
        <div className="h-[700px]">
          <Notices/>
        </div>

      </div>
      <Footer />
    </main>
  )
}

export default App
