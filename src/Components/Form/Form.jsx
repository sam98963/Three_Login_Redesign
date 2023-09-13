import NewTab from "../../Assets/NewTab.png"
import ShowPassword from "../../Assets/ShowPassword.png"
import {useState} from "react"
import validatePassword from "../../Hooks/validatePassword"
import validateEmail from "../../Hooks/validateEmail"
import validatePhoneNumber from "../../Hooks/validatePhoneNumber"
export default function Form(){
  const [formData, setFormData] = useState({
    email:"",
    phone:"",
    password:""
  })
  
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")
  
  function handlePasswordVisibility(){
    setPasswordVisible(!passwordVisible)
    if(passwordVisible){
      setPasswordInputType("text")
    } else{
      setPasswordInputType("password")
    }
  }

  function handleInputChange(event){
    const {name, value} = event.target;
    setFormData((prevState => ({...prevState, [name]: value})));
  }

  function handleFormSubmit(){
    if(!validatePassword(formData.password)){
      return alert("Invalid Password")}
     if(!validateEmail(formData.email)){
      return alert("Invalid Email")
    } if(!validatePhoneNumber(formData.phone)){
      return alert("Invalid Phone Number")
    }
  }

  const inputStyling = "bg-tertiary  py-1 md:py-2 pl-2 rounded w-full focus:outline-none text-xl"

  return(<main className="w-full flex items-center flex-col h-3/5 ">
    <h1 className="text-4xl md:text-5xl font-bold pt-10 py-1 -mt-10 md:py-3 md:pt-10 md:-mt-8 border-b-1 border-secondary px-10">Login</h1>
    
    <section className="w-full flex justify-center text-sm md:text-lg mt-2">
      
      <form type="submit" onSubmit={handleFormSubmit} className="flex flex-wrap w-11/12 lg:w-4/5 xl:justify-start justify-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-7 md:pb-5 pb-2">
          <p className="font-bold">Email Address</p>
          <input type= "text" className={inputStyling} name="email" value={formData.email} onChange={handleInputChange}></input>
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 px-7 flex flex-col">
          <p className="font-bold">Three Number</p>
          <input type= "text" className={inputStyling} name="phone" value={formData.phone} onChange={handleInputChange}></input>
          <a href="" target="_blank" className="self-end underline">Find your number</a>
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 px-7 flex flex-col">
          <p className="font-bold">Password</p>
          <div className="bg-tertiary pl-2 rounded w-full flex justify-between items-center">
            <input type={passwordInputType} className={inputStyling} name="password" value={formData.password} onChange={handleInputChange}></input>
            <img src = {ShowPassword} onClick={handlePasswordVisibility} className="h-6 w-6 inline-block mr-3 cursor-pointer"/>
          </div>
          <a href="" target="_blank" className="self-end underline">Forgot your password?</a>
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 px-7 flex flex-col items-start justify-center">
          <button className="w-full bg-primary font-bold py-1 text-base md:text-xl md:py-2 rounded mt-6.5">Login</button>
          <button className="w-full bg-secondary font-bold py-1 text-base md:text-xl md:py-2 rounded mt-3">Register</button>
          <p className="lg:self-end self-center my-1 md:text-sm text-xs">If you are a business owner, please <a href="" target="_blank" className="self-end underline">login here</a></p>
        </div>
        
      </form>
    </section>
    
    <section className="w-full flex justify-center text-xs md:text-sm">
      <div className="w-4/5 flex justify-center lg:justify-start">
        <div className="flex flex-col w-full md:w-3/5 lg:w-1/2 border-t-1 border-secondary pt-2 md:pt-5 lg:-mt-12">
          <p className="text-center w-full">Three uses hCAPTCHA to keep our forms and users safe from fraud. hCAPTCHA may collect some personal or analytical data. To learn more please visit:</p>
          <div className="flex justify-between w-full px-5 pt-2 md:pt-4">
            <div className="flex items-center">
              <a href="" target="_blank" className="underline">Privacy policy</a>
              <img src = {NewTab} className="h-4 w-4 inline-block ml-1 mb-0.5"/>
            </div>
            <div className="flex items-center">
              <a href="" target="_blank" className="underline">hCAPTCHA website</a>
              <img src = {NewTab} className="h-4 w-4 inline-block ml-1 mb-0.5"/>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>)
}