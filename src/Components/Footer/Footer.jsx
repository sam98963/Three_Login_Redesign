import Internet from "../../Assets/Internet.png"
import Phone from "../../Assets/Phone.png"
import Location from "../../Assets/Location.png"
export default function Footer(){
  return(
    <footer className="md:w-97.5 w-90 md:mx-3 mx-1 h-60 bg-secondary mb-4 mt-auto rounded-lg border-tertiary border-1 md:h-72 flex relative flex-wrap space-between bottom-0">
      <section className="flex flex-col p-3 sm:w-42  w-full">
        <div className="flex row-reverse w-full sm:py-2 py-3 mx-2">
          <img src = {Phone} className="h-6 w-6 inline-block mr-2"/>
          <p>Call us: 0800 033 8001</p>
        </div>
        <div className="flex row-reverse w-full sm:py-2 py-3 mx-2">
          <img src = {Location} className="h-6 w-6 inline-block mr-2"/>
          <p >Nearest Store</p>
        </div>
        <div className="flex row-reverse w-full sm:py-2 py-3 mx-2 ">
          <img src = {Internet} className="h-6 w-6 inline-block mr-2"/>
          <p>Check Network Coverage</p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-start items-end sm:w-52 w-full">

          <ul className="flex w-full sm:justify-end justify-around pt-6 px-2 md:text-sm underline text-xs pt-5 border-t-5 border-tertiary border-solid">
            <li className = "inline sm:px-3 px-1">
              Our Company
            </li>
            <li className = "inline sm:px-3 px-1">
              Explore
            </li>
            <li className = "inline sm:px-3 px-1">
              Terms and Policies
            </li>
            <li className = "inline sm:px-3 px-1">
              Contact Us
            </li>
          </ul>

        <div className="px-5 pt-1 sm:text-xs text-3xs font-light">
          <p className="tracking-normal pb-3">©Hutchison 3G UK Limited</p>
        </div>

      </section>




    <div className="text-center w-full overflow-hidden absolute bottom-0">
      <h1 className="text-16xl font-bold md:-mb-19 xl:-mb-23 xl:text-19xl hidden md:block tracking-wide">Three</h1>
    </div>
  </footer>
  )
}