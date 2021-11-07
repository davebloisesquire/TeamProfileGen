const fs = require('fs');

function pageRender(string) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
      <title>Document</title>
    </head>
    <body>
      <header class="hero is-success">
        <div class="hero-body">
          <h1 class="title">My Team!</h1>
        </div>
      </header>
      <div class="section">
        <section class="columns is-multiline">
          ${string}
        </section>
      </div>
    </body>
    </html>
    `;

  fs.writeFile('employeeCards.html', html, (err) => {
    err ? console.error(err) : console.log("Employee Card Page Written!")
  })
  return;
}
module.exports = pageRender;
