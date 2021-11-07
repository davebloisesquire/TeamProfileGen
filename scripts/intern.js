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
    const newCard = `
    <article class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <h2 class="title">${this.name}</h2>
          <h3 class="role"><i class="fas fa-graduation-cap"></i> ${this.getRole()}</h3>
          <h3 class="id">Employee Id: ${this.id}</h3>
          <h3 class="email"><a href="mailto:${this.email}">${this.email}</a></h3>
          <h3 class="flexible-position">${this.school}</h3>
        </div>
      </div>
    </article>
    `
    return newCard;
  }
}

module.exports = Intern;
