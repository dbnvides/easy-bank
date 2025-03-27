const Navbar = () => {
    return(
        <nav className="w-full h-14 bg-white fixed block z-100">
            <div className="container h-full mx-auto max-w-[1200px] px-10">
                <main className="flex  h-full justify-between items-center">
                    <div><img src="../../../public/logo.svg" alt="logo" /></div>
                    <ul className="flex gap-4 text-[16px] text-[#2D314D] font-thin">
                        <li><a href="Home" className="hover:text-[#31D35C]">Home</a></li>
                        <li><a href="About"className="hover:text-[#31D35C]">About</a></li>
                        <li><a href="Contact"className="hover:text-[#31D35C]">Contact</a></li>
                        <li><a href="Blog"className="hover:text-[#31D35C]">Blog</a></li>
                        <li><a href="Careers"className="hover:text-[#31D35C]">Careers</a></li>
                    </ul>
                    <button className="bg-gradient-to-r from-green-500 to-sky-500 p-2 rounded-full px-6 text-white text-[12px] font-bold cursor-pointer hover:from-green-600 hover:to-sky-600">
                        Request Inivte
                    </button>
                </main>
            </div>
        </nav>
    )
}

export default Navbar