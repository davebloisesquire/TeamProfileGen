const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  };
  getRole() {
    return "Manager";
  };
  renderCard() {
    const newCard = `<div class="card">
      <h2 class="name">${this.name}</h2>
      <h3 class="role"><i class="fas fa-mug-hot"></i> ${this.getRole()}</h3>
      <h3 class="id">${this.id}</h3>
      <h3 class="email">${this.email}</h3>
      <h3 class="flexible-position">${this.officeNumber}</h3>
    </div>`;
    return newCard;
  }
}

module.exports = Manager;
