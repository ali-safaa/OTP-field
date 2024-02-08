const inputs = document.querySelectorAll(" input");

for (let i = 0; i < inputs.length; i++) {
     inputs[i].setAttribute("data-index", i);
     inputs[i].addEventListener("keyup", (e) => handleOtp(inputs[i], e));
}

function handleOtp(input, e) {
     let fieldIndex = input.dataset.index;

     if (fieldIndex < inputs.length - 1) {
          input.nextElementSibling.focus();
     }
     if (e.key == "Backspace" && fieldIndex > 0) {
          input.previousElementSibling.focus();
     }

     if (fieldIndex == inputs.length - 1) {
          alert("its done");
     }
}
