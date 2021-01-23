// Import stylesheets
import "./style.css";

class simpleAlert {
  constructor(type) {
    this.type = type;
    // this.error = error;
    // this.warning = warning;
    // this.success = success;
  }

  get success() {
    return this.displayAlert(
      "Success",
      "Cudownie! Działaj dalej :)",
      "text-green-600"
    );
  }

  get warning() {
    return this.displayAlert(
      "Warning",
      "Uważaj! To co robisz, nie jest ok!",
      "text-yellow-600"
    );
  }

  get error() {
    return this.displayAlert(
      "Error",
      "Coś totalnie poszło nie tak.",
      "text-red-600"
    );
  }

  displayAlert(title, message, color) {
    const alert = document.createElement("div");
    alert.classList.add("p-2");
    alert.innerHTML = `
      <div class="inline-flex items-center bg-white leading-none ${color} rounded-full p-2 shadow text-sm">
        <span class="inline-flex bg-yellow-600 text-white rounded-full h-6 px-3 justify-center items-center text-">${title}</span>
        <span class="inline-flex px-2">${message}</span>
      </div>
    `;

    const container = document.querySelector(".-m-2.text-center");
    container.appendChild(alert);
  }
}

// simpleAlert.error

console.log(document.body.firstElementChild);
console.log(document.querySelector(".-m-2.text-center"));

const alert = new simpleAlert();

alert.warning;
