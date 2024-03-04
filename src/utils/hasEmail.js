export const hasEmail = (email) => {
  if(email === '') {
    console.log("Empty email");
    return false;
  } else {
    return true;
  }
}