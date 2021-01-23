// Import stylesheets
import "./style.css";

class simpleAlert {
  constructor(type) {
    this.type = type;
    this.container = document.querySelector(".-m-2.text-center");
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

  removeAlert(alert) {
    alert.addEventListener("click", e => {
      this.container.removeChild(alert);
    });

    setTimeout(() => {
      if (this.container.contains(alert)) {
        this.container.removeChild(alert);
      }
    }, 3000);
  }

  alertCounter() {
    const container = document.querySelector(".-m-2.text-center");
    return container.childElementCount;
  }

  displayAlert(alert) {
    if (this.alertCounter() < 3) {
      this.container.appendChild(alert);
      this.removeAlert(alert);
      
    } else if (this.alertCounter() >= 3) {
    }
  }
}

const alert = new simpleAlert();

alert.warning;
alert.success;
alert.error;
alert.success;
alert.warning;
alert.error;
alert.success;
