function writeHTML(data) {

//write all styling and html below  
    return `

    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <Header>
        <h1 class = "p-5 mb-2 bg-danger text-white text-center"> My Team </h1>
    </Header>
    
<body>
<div class="card-deck d-flex text-center mt-5 col-6 mx-auto">
    <div class="shadow-lg card text-white bg-primary m-3" style="max-width: 18rem;">
        <div class="card-header fs-4">Manager</div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">Primary card title</h5>
          <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="shadow-lg card text-white bg-primary m-3" style="max-width: 18rem;">
        <div class="card-header fs-4">Engineer</div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">Primary card title</h5>
          <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="shadow-lg card text-white bg-primary m-3" style="max-width: 18rem;">
        <div class="card-header fs-4">Engineer</div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">Primary card title</h5>
          <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div> 
</div>

<div class="card-deck d-flex text-center mt-5 col-4 mx-auto">
    <div class="shadow-lg card text-white bg-primary m-3" style="max-width: 18rem;">
        <div class="card-header fs-4">Engineer</div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">Primary card title</h5>
          <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="shadow-lg card text-white bg-primary m-3" style="max-width: 18rem;">
        <div class="card-header fs-4">Intern</div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">Primary card title</h5>
          <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>  
</body>
</html>

  `;
  }

  module.exports generateHTML;