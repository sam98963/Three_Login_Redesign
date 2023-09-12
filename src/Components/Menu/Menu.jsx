import PropTypes from "prop-types"
import BlogIcon from "../../Assets/BlogIcon.png"
import Question from "../../Assets/Question.png"
import ShoppingBag from "../../Assets/ShoppingBag.png"
import Register from "../../Assets/Register.png"
import SignIn from "../../Assets/SignIn.png"
export default function Menu({menuOpen, setMenuOpen}){

  function handleMenuClose(){
    setMenuOpen(!menuOpen)
  }

  return(<>
    {menuOpen ? (
        
    <aside className="h-full w-full sm:w-96 lg:w-112 bg-primary absolute top-0 right-0 flex flex-col items-end text-3xl overflow-hidden">
      <div className= "sm:h-60 h-52 w-full bg-secondary flex flex-col items-end justify-center" onClick={handleMenuClose}>
        <div className="flex row-reverse justify-end w-1/2 pb-5 border-t-1 border-tertiary border-dashed mr-5">
          <h2 className="text-5xl font-bold pt-5">Welcome!</h2>
        </div>
        <div className="flex row-reverse justify-end items-center w-1/2 pb-2 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2">Sign In</p>
          <img src = {SignIn} className="h-6 w-6 inline-block -mt-1"/>
        </div>
        <div className="flex row-reverse justify-end items-center w-1/2 pb-2 border-t-1 border-tertiary border-dashed mr-5">
          <p className="mr-2">Register</p>
          <img src = {Register} className="h-6 w-6 inline-block -mt-1"/>
        </div>
           <p className="self-start justify-self-end">X</p>
      </div>

      <div className="py-5 flex items-center justify-end w-full mr-5">
        <input type= "text" className="w-57.5 placeholder:text-lg py-2 pl-2 rounded sm:w-2/3 lg:placeholder:text-xl border-tertiary border-1 focus:border-primary focus:outline-tertiary text-xl " placeholder="Search"></input>
      </div>
      <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
        <p className="mr-2">Store</p>
        <img src = {ShoppingBag} className="h-6 w-6 inline-block -mt-1"/>
      </div>
      <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
        <p className="mr-2">Help</p>
        <img src = {Question} className="h-6 w-6 inline-block"/>
      </div>
      <div className="flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5">
        <p className="mr-2">Blog</p>
        <img src = {BlogIcon} className="h-6 w-6 inline-block"/>
      </div>
      <h1 className="text-9xl font-bold self-center absolute -bottom-11">Three</h1>
    </aside>
    
    )
    : null}
  </>)
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired, setMenuOpen: PropTypes.func.isRequired
}