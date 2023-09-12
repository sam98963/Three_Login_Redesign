import PropTypes from "prop-types"
import BlogIcon from "../../Assets/BlogIcon.png"
import Question from "../../Assets/Question.png"
import ShoppingBag from "../../Assets/ShoppingBag.png"
export default function Menu({menuOpen, setMenuOpen}){

  function handleMenuClose(){
    setMenuOpen(!menuOpen)
  }

  return(<>
    {menuOpen ? (
        
    <aside className="h-full w-full sm:w-96 lg:w-112 bg-primary absolute top-0 right-0 flex flex-col text-end">
    <div className= "h-60 bg-secondary" onClick={handleMenuClose}>
      <p>X</p>
    </div>
      <div>
        <input></input>
      </div>
      <div className="flex row-reverse justify-end">
        <p>Store</p>
        <img src = {ShoppingBag} className="h-6 w-6 inline-block -mt-1"/>
      </div>
      <div className="flex row-reverse justify-end">
        <p>Help</p>
        <img src = {Question} className="h-6 w-6 inline-block"/>
      </div>
      <div className="flex row-reverse justify-end">
        <p>Blog</p>
      <img src = {BlogIcon} className="h-6 w-6 inline-block"/>
      </div>
    </aside>
    
    )
    : null}
  </>)
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired, setMenuOpen: PropTypes.func.isRequired
}