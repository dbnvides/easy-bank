const Header = () => {
    return (
        <header className="bg-zinc-100 h-[calc(100vh-56px)] w-full mx-auto overflow-y-visible relative z-50">
            <main className="flex justify-between items-center mx-auto w-full max-w-[1200px] px-10 h-full relative">
                {/* Seção de Texto (mantida intacta) */}
                <section className="w-[45%] flex flex-col gap-6 z-40">
                    <h1 className="text-5xl text-[#2D314D] font-light">
                        Next generation digital banking
                    </h1>
                    <p className="text-[#9698A6] text-lg">
                        Take your financial life online. Your Easybank account will be 
                        a one-stop-shop for spending, saving, budgeting, investing, 
                        and much more.
                    </p>
                    <button className="bg-gradient-to-r from-green-500 to-sky-500 w-fit p-2 rounded-full px-6 text-white text-[12px] font-bold cursor-pointer hover:from-green-600 hover:to-sky-600">
                        Request Invite
                    </button>
                </section>

                <section className="w-[50%] h-full">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%]">
                        <div className="relative">
                            <div className="absolute -z-10 bg-[url('/bg-intro-desktop.svg')] bg-no-repeat bg-right bg-contain w-[180%] h-[120%] -top-50 -right-130" />
                            <img 
                                src="/image-mockups.png" 
                                alt="image" 
                                className="relative z-50 w-full h-auto max-w-[800px] translate-x-10 translate-y-20"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
}

export default Header