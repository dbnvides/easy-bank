import Header from "./components/Header"
import Navbar from "./components/NavBar"

function App() {
  return (
    <main className='bg-zinc-100 w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <div className="pt-14 h-full relative"> 
        <Header />
        <div className="h-screen relative z-20 bg-zinc-200">
          
        </div>
      </div>
    </main>
  )
}

export default App
