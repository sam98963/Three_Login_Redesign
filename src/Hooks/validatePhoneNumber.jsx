// Conditions for phone number:
/* 
- Must be present.
- Must start with either +44 or 07
- Must be of either 11 or 12 digits in length (12 for if it starts with +44) - not counting the "+"
*/

export default function useValidatePhoneNumber(phone){
    if(!phone){
    return false
  } if(phone.includes(" ")){
    return false
  }
    const phoneNumberDigits = phone.replace(/\D/g, "")

    if(!phoneNumberDigits.startsWith("07") || !phoneNumberDigits.startsWith("44")){
      return false
    }

    if(phoneNumberDigits.length <=12 && phoneNumberDigits>=11){
      return false
    }
  }