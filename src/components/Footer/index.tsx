const Footer = () =>{
    return(
        <footer className="bg-[#1e2239] h-[200px]">
            <main className="mx-auto w-full max-w-[1200px] p-10 flex items-center h-full">
                <section className="flex gap-30 w-full items-center h-full">
                    <div className="flex flex-col justify-between h-full py-1">
                        <div className="p-1 bg-white rounded">
                            <img src="../../../public/logo.svg" alt="logo" />
                        </div>
                        <ul className="flex gap-4">
                            <li>
                                <img src="../../public/icon-facebook.svg" alt="facebook" />
                            </li>
                            <li>
                                <img src="../../public/icon-youtube.svg" alt="youtube" />
                            </li>
                            <li>
                                <img src="../../public/icon-twitter.svg" alt="twitter" />
                            </li>
                            <li>
                                <img src="../../public/icon-pinterest.svg" alt="pinterest" />
                            </li>
                            <li>
                                <img src="../../public/icon-instagram.svg" alt="instagram" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-wrap h-full text-white">
                            <li className="w-1/2 p-2">About Us</li>
                            <li className="w-1/2 p-2">Contact</li>
                            <li className="w-1/2 p-2">Blog</li>
                            <li className="w-1/2 p-2">Carrers</li>
                            <li className="w-1/2 p-2">Support</li>
                            <li className="w-1/2 p-2">Privacy Policy</li>
                        </ul>
                    </div>
                </section>

                <section className="w-[300px] h-full flex flex-col items-end justify-center gap-5">
                    <button className="bg-gradient-to-r from-green-500 to-sky-500 p-2 rounded-full px-6 text-white text-[12px] font-bold cursor-pointer hover:from-green-600 hover:to-sky-600 w-[150px]">
                        Request Inivte
                    </button>
                    <span>By Dionisio Benevides dos Santos</span>
                </section>

            </main>
        </footer>
    )
}

export default Footer