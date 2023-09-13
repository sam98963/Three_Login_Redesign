// Conditions for password:
/* 
- Must be present.
- Must be 8 or more characters.
- Must not have spaces.
- Must contain each type of character (upper, lower, symbol and number).
*/

export default function useValidatePassword(password){
if(!password){
  return false
} if(password.length < 8){
  return false
} if(password.contains(" ")){
  return false
}
const lowerRegex = /[a-z]/
const upperRegex = /[A-Z]/
const specialRegex = /[!@#$%^&*()_+[\]{}:;<>,.?~\\-]/
const numRegex = /[0-9]/
  if(!lowerRegex.test(password) || !upperRegex.test(password || !specialRegex.test(password) || !numRegex.test(password))){
    return false
  }
  return true
}