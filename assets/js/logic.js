var blogFormEl = $('#blog-form');
var userNameEl = $('input[name="userName"]');
var titleEl = $('input[name="title"]');
var contentEl = $('textarea[name="content"]');

var blogEntry = {
    userName: undefined,
    title: undefined,
    commenet: undefined,
};

var blogEntries = [];

function handleBlogFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();

    console.log('User Name: ' + userNameEl.val());
    console.log('Title: ' + titleEl.val());
    console.log('Content:' + contentEl.val());

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
       
        
    } 



}

// Submit event on the form
blogFormEl.on('submit', handleBlogFormSubmit);