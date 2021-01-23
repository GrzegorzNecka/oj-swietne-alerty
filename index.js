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
    return this.createAlert(
      "Success",
      "Cudownie! Działaj dalej :)",
      "green-600"
    );
  }

  get warning() {
    return this.createAlert(
      "Warning",
      "Uważaj! To co robisz, nie jest ok!",
      "yellow-600"
    );
  }

  get error() {
    return this.createAlert("Error", "Coś totalnie poszło nie tak.", "red-600");
  }

  createAlert(title, message, color) {
    const alert = document.createElement("div");
    alert.classList.add("p-2");
    alert.innerHTML = `
      <div class="inline-flex items-center bg-white leading-none text-${color} rounded-full p-2 shadow text-sm">
        <span class="inline-flex bg-${color} text-white rounded-full h-6 px-3 justify-center items-center text-">${title}</span>
        <span class="inline-flex px-2">${message}</span>
      </div>
    `;

    return this.displayAlert(alert);
  }

  displayAlert(alert) {

    const container = document.querySelector(".-m-2.text-center");

    if (container.childElementCount < 3) {
      container.appendChild(alert);
      setTimeout(()=>{
        container.removeChild(alert);
      },10000)
    }

    
  }
}

const alert = new simpleAlert();

alert.warning;
alert.success;
alert.error;
alert.error;
