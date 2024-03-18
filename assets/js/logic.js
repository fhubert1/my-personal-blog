var blogFormEl = $('#blog-form');
var userNameEl = $('input[name="userName"]');
var titleEl = $('input[name="title"]');
var contentEl = $('textarea[name="content"]');
var modeCheckEl = $('#modeTheme');
var modeLabelEl = $('label[for="switchTheme"]');
var body = $('#indexBody');

// blog form object
var blogEntry = {
    userName: undefined,
    title: undefined,
    commenet: undefined,
};

// create empty blog entry array
var blogEntries = [];

// handle submit button function
function handleBlogFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();

    var userName = userNameEl.val();
    var title = titleEl.val();
    var content = contentEl.val();

    if(userName &&
        title &&
        content) {
        // store and redirect
        var data = Object.create(blogEntry);
        data.userName = userName;
        data.title = title;
        data.content = content;

        blogEntries = JSON.parse(localStorage.getItem("blogEntries"));
        if (!blogEntries) {
            blogEntries = [];
        }

        blogEntries.push(data);

        localStorage.setItem("blogEntries", JSON.stringify(blogEntries));

        var storageEntries = JSON.parse(localStorage.getItem("blogEntries"));
        
        storageEntries.forEach(element => {
            console.log(element);
        });

        // redirect to blog page if there are entries to display
        if (blogEntries.length > 1) {
            clearForm();
            window.location.href = "blog.html";
        }
        
    } 

}

// change color mode on click
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

// reset elements
function clearForm() {
    blogFormEl[0].reset();
}

// Submit event on the form
blogFormEl.on('submit', handleBlogFormSubmit);