const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  };
  getRole() {
    return "Engineer";
  };
  renderCard() {
    const newCard = `<div class="card">
      <h2 class="name">${this.name}</h2>
      <h3 class="role"><i class="fas fa-glasses"></i> ${this.getRole()}</h3>
      <h3 class="id">${this.id}</h3>
      <h3 class="email">${this.email}</h3>
      <h3 class="flexible-position">${this.github}</h3>
    </div>`;
    return newCard;
  }
}

module.exports = Engineer;
