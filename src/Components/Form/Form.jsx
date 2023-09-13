import NewTab from "../../Assets/NewTab.png"
export default function Form(){
  return(<main className="w-full flex items-center flex-col h-3/5 ">
    <h1 className="text-4xl md:text-5xl font-bold py-2 pt-10 -mt-4 md:py-8 md:-mt-8">Login</h1>
    
    <section className="w-full flex justify-center text-sm md:text-lg">
      
      <form className="flex flex-wrap w-11/12 md:w-4/5 xl:justify-start justify-center">
        <div className="w-full md:w-1/2 px-7 py-2 md:py-5 md:py-0">
          <p className="font-bold">Email Address</p>
          <input type= "text" className="bg-tertiary placeholder:text-sm py-1 md:placeholder:text-lg md:py-2 pl-2 rounded w-full lg:placeholder:text-xl focus:outline-none text-xl "></input>
        </div>
        <div className="w-full md:w-1/2 px-7 flex flex-col">
          <p className="font-bold">Three Number</p>
          <input type= "text" className="bg-tertiary md:placeholder:text-lg py-1 md:py-2 pl-2 rounded w-full lg:placeholder:text-xl focus:outline-none text-xl "></input>
          <a className="self-end underline">Find your number</a>
        </div>
        <div className="w-full md:w-1/2 px-7 flex flex-col">
          <p className="font-bold">Password</p>
          <input type= "text" className="bg-tertiary md:placeholder:text-lg py-1 md:py-2 pl-2 rounded w-full lg:placeholder:text-xl focus:outline-none text-xl "></input>
          <a className="self-end underline">Forgot your password?</a>
        </div>
        <div className="w-full md:w-1/2 px-7 flex flex-col justify-center">
          <button className="w-full bg-primary font-bold text-xl py-2 rounded mt-6.5">Login</button>
          <button className="w-full bg-secondary font-bold text-xl py-2 rounded mt-3">Register</button>
          <p className="md:self-end self-center my-1 md:text-sm text-xs">If you are a business owner, please <a className="self-end underline">login here</a></p>
        </div>
        
      </form>
    </section>
    
    <section className="w-full flex justify-center text-xs md:text-sm">
      <div className="w-4/5">
        <div className="flex flex-col w-full md:w-1/2 border-t-1 border-secondary pt-2 md:pt-5 lg:-mt-12">
          <p className="text-center w-full">Three uses hCAPTCHA to keep our forms and users safe from fraud. hCAPTCHA may collect some personal or analytical data. To learn more please visit:</p>
          <div className="flex justify-between w-full px-5 pt-2 md:pt-4">
            <div className="flex items-center">
              <p className="underline">Privacy policy</p>
              <img src = {NewTab} className="h-4 w-4 inline-block ml-1 mb-0.5"/>
            </div>
            <div className="flex items-center">
              <p className="underline">hCAPTCHA website</p>
              <img src = {NewTab} className="h-4 w-4 inline-block ml-1 mb-0.5"/>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>)
}