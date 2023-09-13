// conditions for email:
/* 
- No spaces
- contains domain name
- contains top level domain
- starts and ends with characters
*/



export default function useValidateEmail(email){
  if(!email){
    return false
  } if(email.includes(" ")){
    return false
  }
  // string contains valid characters before domain, followed by @ for domain name again with valid character and then only letters for top level.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!email.match(emailRegex)){
    return false
  } 

  // first characters after each symbol must be letters
  let charRegex = /^[a-z]/i
  let array = email.split(/[.@]/)
    for(let i = 0; i<array.length; i++){
      let firstChar = array[i].charAt(0)
      if(!charRegex.test(firstChar)){
        return false
      }
    }
    return true
  }