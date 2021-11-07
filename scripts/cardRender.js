renderCard() {
  const newCard = `<div class="card">
    <h2 class="name">${this.name}</h2>
    <h3 class="role"><i class="fas fa-graduation-cap"></i> ${this.getRole()}</h3>
    <h3 class="id">${this.id}</h3>
    <h3 class="email">${this.email}</h3>
    <h3 class="flexible-position">${this.flex}</h3>
  </div>`;
  return newCard;
}
