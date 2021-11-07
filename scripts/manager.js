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
    const newCard = `
    <article class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
        <h2 class="title">${this.name}</h2>
        <h3 class="role"><i class="fas fa-mug-hot"></i> ${this.getRole()}</h3>
        <h3 class="id">Employee Id: ${this.id}</h3>
        <h3 class="email"><a href="mailto:${this.email}">${this.email}</a></h3>
        <h3 class="flexible-position">Office Number ${this.officeNumber}</h3>
        </div>
      </div>
    </article>
    `;
    return newCard;
  }
}

module.exports = Manager;
