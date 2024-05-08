
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"


export const randomURL = (len = 7) => {
  let result = ''

  // const randomArray = new Uint8Array(len)
  //
  // crypto.getRandomValues(randomArray)
  //
  // randomArray.forEach((number) => {
  //   result += chars[number % chars.length];
  // });


  for (let index = 0; index < len; index++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}
