import ThreeLogo from "../../Assets/ThreeLogo.png"
import MenuIcon from "../../Assets/MenuIcon.png"
export default function Header(){
  return(<div className="
  flex justify-between items-center
  md:w-97.5 w-90 md:mx-3 mx:1 h-16 bg-primary my-4 rounded-lg border-tertiary border-1">
 <img className="w-12 h-12 mx-4" src={ThreeLogo}/>
 <img className="w-12 h-12 mx-4" src={MenuIcon}/>

  </div>)
}