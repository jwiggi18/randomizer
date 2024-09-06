const blogs = [
"https://mmeiner.blogspot.com/",
"https://knowitulover.blogspot.com/",
"https://biol4133-evolution.blogspot.com/",
"https://thoughtmutation.blogspot.com/",
"https://desscardona.blogspot.com/",
"https://jasmineplata-evolution.blogspot.com/",
"https://osu-ashe.blogspot.com/",
"https://katevolutionarybiology.blogspot.com/",
"https://acr-evolution.blogspot.com/",
"https://shortstack123.blogspot.com/",
"https://abbydecker-evolution.blogspot.com/",
"https://evolutionwgracie.blogspot.com/",
"https://brookesevolutionblog.blogspot.com/",
"https://catrinalaguirre.blogspot.com/",
"https://rinnaevoblog.blogspot.com/",
"https://eliseandevolution.blogspot.com/",
"https://kalissamoseley666.blogspot.com",
"https://kelisevolutionblog.blogspot.com/",
"https://geminiah.blogspot.com/",
"https://evolution-annahboone.blogspot.com/",
"https://Adonnay95.blogspot.com"
];

// Function to display a new blog link
function newBlog() {
  // Select a random blog from the array
  const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];

  // Display the blog as a clickable link
  const blogDisplayDiv = document.getElementById("blogDisplay");
  blogDisplayDiv.innerHTML = `<a href="${randomBlog}" target="_blank">${randomBlog}</a>`;
}
