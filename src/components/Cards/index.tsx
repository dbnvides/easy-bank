const Cards = () =>{
    return(
        <section className="mx-auto w-full max-w-[1200px] px-10 flex justify-center h-full flex-col gap-14">
            <div className="flex flex-col gap-10"> 
              <h1 className="text-5xl text-zinc-900">Why choose EasyBank</h1>
              <p className="w-[600px] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur ipsa minus temporibus nihil sunt aspernatur rerum animi!</p>
            </div>
            <ul className="flex gap-4 justify-start">
              <li className="w-[300px] flex flex-col gap-6">
                <div><img src="../../public/icon-online.svg" alt="online-bank" /></div>
                <h2 className="text-2xl text-zinc-900">Online Banking</h2>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vitae! Cupiditate doloribus aut delectus!</p>
              </li>
              <li className="w-[300px] flex flex-col gap-6">
                <div><img src="../../public/icon-budgeting.svg" alt="online-bank" /></div>
                <h2 className="text-2xl text-zinc-900">Simple Budgeting</h2>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vitae! Cupiditate doloribus aut delectus!</p>
              </li>
              <li className="w-[300px] flex flex-col gap-6">
                <div><img src="../../public/icon-onboarding.svg" alt="online-bank" /></div>
                <h2 className="text-2xl text-zinc-900">Fast Onboarding</h2>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vitae! Cupiditate doloribus aut delectus!</p>
              </li>
              <li className="w-[300px] flex flex-col gap-6">
                <div><img src="../../public/icon-api.svg" alt="online-bank" /></div>
                <h2 className="text-2xl text-zinc-900">Open API</h2>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vitae! Cupiditate doloribus aut delectus!</p>
              </li>
            </ul>
          </section>
    )
}

export default Cards