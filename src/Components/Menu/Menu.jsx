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

  const lowerMenuOptionsStyling = "flex row-reverse justify-end items-center w-1/2 py-5 border-t-1 border-tertiary border-dashed mr-5 cursor-pointer hover:text-secondary"
  const iconStyling = "h-6 w-6 inline-block"
  const upperMenuOptionsStyling = "flex row-reverse justify-end items-center w-1/2 pb-2 border-t-1 border-tertiary border-dashed mr-5 cursor-pointer hover:text-primary"

  return(<>
    {menuOpen ? (
        
    <aside className="h-full w-full sm:w-96 lg:w-112 bg-primary absolute top-0 right-0 text-2xl overflow-hidden">

      <section className= "sm:h-60 h-52 w-full bg-secondary flex flex-col items-end justify-center">

        <div onClick={handleMenuClose} className="self-start justify-self-end absolute top-0 mt-4 ml-5 pb-1 cursor-pointer hover:border-b-2 hover:border-primary">
          <img src = {Close}  className="h-10 w-10 inline-block -mt-1"/>
        </div>

        <div className="flex row-reverse justify-end w-1/2 pb-5 border-t-1 border-tertiary border-dashed mr-5 ">
          <h2 className="text-5xl font-bold pt-5">Welcome!</h2>
        </div>

        <div className={upperMenuOptionsStyling}>
          <a href="" target="_blank" className="mr-2 cursor-pointer">Sign In</a>
          <img src = {SignIn} className={iconStyling}/>
        </div>

        <div className={upperMenuOptionsStyling}>
          <a href="" target="_blank" className="mr-2 cursor-pointer">Register</a>
          <img src = {Register} className={iconStyling}/>
        </div>

        
      </section>



      <section className="w-full flex flex-col items-end text-2xl">
        <div className="py-5 flex items-center justify-end w-full mr-5">
          <div className="w-57.5 sm:w-2/3 md:w-4/5 bg-secondary border-tertiary border-1 focus:border-primary focus:outline-tertiary text-xl rounded flex justify-between items-center">
            <input type= "text" className="w-57.5 bg-secondary placeholder:text-lg py-2 pl-2 rounded sm:w-2/3 md:w-4/5 lg:placeholder:text-xl focus:outline-none text-xl " placeholder="Search"></input>
            <img src={Search} className="h-6 w-6 inline-block mr-3 cursor-pointer"/>
          </div>
        </div>

        <div className={lowerMenuOptionsStyling}>
          <a href="" target="_blank" className="mr-2">Store</a>
          <img src = {ShoppingBag} className={`${iconStyling} + -mt-1`}/>
        </div>

        <div className={lowerMenuOptionsStyling}>
          <a href="" target="_blank" className="mr-2">Help</a>
          <img src = {Question} className={iconStyling}/>
        </div>

        <div className={lowerMenuOptionsStyling}>
          <a href="" target="_blank" className="mr-2">Blog</a>
          <img src = {BlogIcon} className={iconStyling}/>
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