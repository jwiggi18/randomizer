var blogs = [
"https://brobowe.blogspot.com/", 
"https://shanesevolutionarysoup.blogspot.com",
"https://evolutionbytaylor.blogspot.com/",
"https://starfilled57evolution.blogspot.com/2021/08/about-me-evolution.html",
"https://brandonneat.blogspot.com/2021/08/about-me-evolution.html",
"https://thinkspeakrepeat.blogspot.com/"



]

function newBlog() {
  var randomNumber = Math.floor(Math.random() * (blogs.length));
  document.getElementById('blogDisplay').innerHTML = blogs[randomNumber];
}
