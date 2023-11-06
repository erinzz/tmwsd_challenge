const submitForm = () => {
  const sender = document.getElementsByClassName("post-sender-val").sender.value;
  const message = document.getElementsByClassName("post-msg-val").message.value;

  if (sender && message) {
    alert('Success! Message sent');
  } else {
    alert('Your form is incomplete');
  }
}
