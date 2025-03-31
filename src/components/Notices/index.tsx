const Notices = () =>{
    return(
        <section className="mx-auto w-full max-w-[1200px] px-10 flex justify-center h-full flex-col gap-14">
            <h1 className="text-5xl text-zinc-900">Last Articles</h1>
            <ul className="flex w-full gap-6">
              <li className="max-w-[300px] rounded-sm overflow-hidden bg-white">
                <div className="h-[200px]"><img src="../../public/image-currency.jpg" alt="money" className="h-full" /></div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-[12px]">By Claire Robinson</span>
                  <h3 className="text-zinc-900 text-[20px] leading-6">Recive money in any currency with no fees</h3>
                  <p className="line-clamp-4 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolores magni veritatis eaque ducimus, pariatur dolorum alias totam neque minima, provident distinctio, doloremque corrupti ea! A ea aperiam veritatis. Recusandae?</p>
                </div>
              </li>
              <li className="max-w-[300px] rounded-sm overflow-hidden bg-white">
                <div className="h-[200px]">
                  <img src="../../public/image-restaurant.jpg" alt="restaurant" className="h-full" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-[12px]">By Wilson Hutton</span>
                  <h3 className="text-zinc-900 text-[20px] leading-6 ">Treat yourself without worryng about money</h3>
                  <p className="line-clamp-4 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolores magni veritatis eaque ducimus, pariatur dolorum alias totam neque minima, provident distinctio, doloremque corrupti ea! A ea aperiam veritatis. Recusandae?</p>
                </div>
              </li>
              <li className="max-w-[300px] rounded-sm overflow-hidden bg-white">
                <div className="h-[200px]"><img src="../../public/image-plane.jpg" alt="plane" className="h-full"/></div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-[12px]">By Marine Gaspar</span>
                  <h3 className="text-zinc-900 text-[20px] leading-6">Take yout Easybank card wherever you go</h3>
                  <p className="line-clamp-4 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolores magni veritatis eaque ducimus, pariatur dolorum alias totam neque minima, provident distinctio, doloremque corrupti ea! A ea aperiam veritatis. Recusandae?</p>
                </div>
              </li>
              <li className="max-w-[300px] rounded-sm overflow-hidden bg-white">
                <div className="h-[200px]"><img src="../../public/image-confetti.jpg" alt="money" className="h-full"/></div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-[12px]">By Francis</span>
                  <h3 className="text-zinc-900 text-[20px] leading-6">Our invite-only Beta accounts are now live!</h3>
                  <p className="line-clamp-4 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolores magni veritatis eaque ducimus, pariatur dolorum alias totam neque minima, provident distinctio, doloremque corrupti ea! A ea aperiam veritatis. Recusandae?</p>
                </div>
              </li>
            </ul>
          </section>
    )
}

export default Notices