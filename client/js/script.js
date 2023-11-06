

const submitForm = () => {
  console.log('in submit form function')
  const sender = document.getElementsByClassName("post-sender-val").sender.value;
  const message = document.getElementsByClassName("post-msg-val").message.value;




  if (sender && message) {
    alert('Success! Message sent')
  } else {
    alert('Your form is incomplete')
  }
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {window.history.go(1);};
}
