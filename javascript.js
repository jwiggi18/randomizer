const blogs = [
"https://mmeiner.blogspot.com",
"https://knowitulover.blogspot.com",
"https://biol4133-evolution.blogspot.com",
"https://thoughtmutation.blogspot.com",
"https://desscardona.blogspot.com",
"https://jasmineplata-evolution.blogspot.com",
"https://osu-ashe.blogspot.com",
"https://katevolutionarybiology.blogspot.com",
"https://acr-evolution.blogspot.com",
"https://shortstack123.blogspot.com"
];

// Function to display a new blog link
function newBlog() {
  // Select a random blog from the array
  const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];

  // Display the blog as a clickable link
  const blogDisplayDiv = document.getElementById("blogDisplay");
  blogDisplayDiv.innerHTML = `<a href="${randomBlog}" target="_blank">${randomBlog}</a>`;
}
