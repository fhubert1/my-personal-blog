//var cardRow = document.getElementById("cardRow");
var cardRowEl = $('#cardRow');
var blogData = JSON.parse(localStorage.getItem("blogEntries"));
var btnBackEl = $('#btnBack');
var modeCheckEl = $('#modeTheme');
var modeLabelEl = $('label[for="switchTheme"]');
var body = $('#blogBody');


// function to dynamically create blog cards
function createCards() {

    blogData.forEach(data => {
        const cardCol = document.createElement("div");

        const card = `
        <div class="card mb-2 mt-2">
          <div class="card-body m-0">
            <h5 class="card-title">${data.title}</h5>
            <hr />
            <p class="card-text card-text-indent">${data.content}</p>
            <p class="card-footer text-muted fs-6 fst-italic">Posted by: ${data.userName}</p>
          </div>
        </div>
      `;

        cardCol.innerHTML = card;
        //cardRow.appendChild(cardCol);
        cardRowEl.append(cardCol);
    });
}

// back button function
btnBackEl.on('click', function() {
    window.history.back();
});

// change color mode on click function
modeCheckEl.on('click', function() {

    if(this.checked) {
        modeLabelEl.text("Light Mode");
        body.addClass('light');
        body.removeClass('dark');
    } else {
        modeLabelEl.text("Dark Mode");
        body.addClass('dark');
        body.removeClass('light');
    }

})

// Call the function to create and fill cards
createCards();


