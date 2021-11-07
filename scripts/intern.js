const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  };
  getRole() {
    return "Intern";
  };
  renderCard() {
    const newCard = `<div class="card">
      <h2 class="name">${this.name}</h2>
      <h3 class="role"><i class="fas fa-graduation-cap"></i> ${this.getRole()}</h3>
      <h3 class="id">${this.id}</h3>
      <h3 class="email">${this.email}</h3>
      <h3 class="flexible-position">${this.school}</h3>
    </div>`;
    return newCard;
  }
}

module.exports = Intern;
