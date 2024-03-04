export const hasMessage = (message) => {
  if(message === '') {
    console.log("Empty message");
    return false;
  } else {
    return true;
  }
}