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
    const newCard = `
    <article class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <h2 class="title">${this.name}</h2>
          <h3 class="role"><i class="fas fa-graduation-cap"></i> ${this.getRole()}</h3>
          <h3 class="id">Employee Id: ${this.id}</h3>
          <h3 class="email"><a href="mailto:${this.email}">${this.email}</a></h3>
          <h3 class="flexible-position"><a href="https://github.com/${this.github}">${this.github}</a></h3>
        </div>
      </div>
    </article>
    `;
    return newCard;
  }
}

module.exports = Engineer;
