import PropTypes from "prop-types"
import BlogIcon from "../../Assets/BlogIcon.png"
import Question from "../../Assets/Question.png"
import ShoppingBag from "../../Assets/ShoppingBag.png"
import Register from "../../Assets/Register.png"
import SignIn from "../../Assets/SignIn.png"
import Close from "../../Assets/Close.png"
import Search from "../../Assets/Search.png"
export default function Menu({menuOpen, setMenuOpen}){

  function handleMenuClose(){
    setMenuOpen(!menuOpen)
  }

  return(<>
    {menuOpen ? (
        
    <aside className="h-full w-full sm:w-96 lg:w-112 bg-primary absolute top-0 right-0 text-2xl overflow-hidden">

      <section className= "sm:h-60 h-52 w-full bg-secondary flex flex-col items-end justify-center">

        <div onClick={handleMenuClose} className="self-start justify-self-end absolute top-0 mt-4 ml-5 cursor-pointer">
          <img src = {Close}  className="h-10 w-10 inline-block -mt-1"/>
        </div>

        <div className="flex row-reverse justify-end w-1/2 pb-5 border-t-1 border-tertiary border-dashed mr-5 ">
          <h2 className="text-5xl font-bold pt-5">Welcome!</h2>
        </div>

        <div className="flex row-reverse justify-end items-center w-1/2 pb-2 border-t-1 border-tertiary border-dashed mr-5 ">
          <p className="mr-2 cursor-pointer">Sign In</p>
          <img src = {SignIn} className="h-6 w-6 inline-block -mt-1 cursor-pointer"/>
        </div>

        <div className="flex row-reverse justify-end items-center w-1/2 pb-2 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2 cursor-pointer">Register</p>
          <img src = {Register} className="h-6 w-6 inline-block -mt-1 cursor-pointer"/>
        </div>

        
      </section>

      <section className="w-full flex flex-col items-end text-2xl">

        <div className="py-5 flex items-center justify-end w-full mr-5">
          <div className="w-57.5 sm:w-2/3 md:w-4/5 bg-secondary border-tertiary border-1 focus:border-primary focus:outline-tertiary text-xl rounded flex justify-between items-center">
            <input type= "text" className="w-57.5 bg-secondary placeholder:text-lg py-2 pl-2 rounded sm:w-2/3 md:w-4/5 lg:placeholder:text-xl focus:outline-none text-xl " placeholder="Search"></input>
            <img src={Search} className="h-6 w-6 inline-block mr-3 cursor-pointer"/>
          </div>
        </div>

        <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2 cursor-pointer">Store</p>
          <img src = {ShoppingBag} className="h-6 w-6 inline-block -mt-1 cursor-pointer"/>
        </div>

        <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2 cursor-pointer">Help</p>
          <img src = {Question} className="h-6 w-6 inline-block cursor-pointer"/>
        </div>

        <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2 cursor-pointer">Blog</p>
          <img src = {BlogIcon} className="h-6 w-6 inline-block cursor-pointer"/>
        </div>

        <h1 className="text-9xl font-bold self-center absolute -bottom-11">Three</h1>
      </section>
    </aside>
    
    )
    : null}
  </>)
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired, setMenuOpen: PropTypes.func.isRequired
}