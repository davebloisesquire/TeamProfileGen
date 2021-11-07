const fs = require('fs');

function pageRender(string) {
  const html = `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
    <title>Document</title>
  </head>
  <body>
    ${string}
  </body>
  </html>`;

  fs.writeFile('employeeCards.html', html, (err) => {
    err ? console.error(err) : console.log("Employee Card Page Written!")
  })
  return;
}
module.exports = pageRender;
