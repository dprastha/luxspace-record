import { addClass, removeClass } from "./utils-class";

let data = {
   "complete-name": "",
   "email": "",
   "address": "",
   "phone-number": "",
   "courier": "",
   "payment": "",
};

const inputs = document.querySelectorAll("#shipping-detail input[data-input]");
for (let i = 0; i < inputs.length; i++) {
   const input = inputs[i];
   input.addEventListener("change", function (event) {
      data[event.target.id] = event.target.value;
      check();
   });
}

const options = document.querySelectorAll("#shipping-detail button[data-name]");
for (let i = 0; i < options.length; i++) {
   const option = options[i];

   option.addEventListener('click', function () {
      const value = this.attributes['data-value'].value;
      const name = this.attributes['data-name'].value;

      data[name] = value;
      check();
   });
}

function check() {
   const find = Object.values(data).filter((item) => item === "");
   if (find.length === 0) {
      document.querySelector("#shipping-detail button[type='submit']").disabled = false;
   }
}