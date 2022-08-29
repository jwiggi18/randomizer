var blogs = [
"https://ameyali12365.blogspot.com/", 
"http://belahadleyosu.blogspot.com/",
"https://azizelias339.blogspot.com/",
"https://graciesblog76.blogspot.com/",
"https://haneenabouhassounblogforevolution.blogspot.com",
"https://evolutionodance.blogspot.com/",
"https://evolutionbymarie.blogspot.com",
"https://premedmel.blogspot.com/",
"https://nateokstate.blogspot.com/"


]

function newBlog() {
  var randomNumber = Math.floor(Math.random() * (blogs.length));
  document.getElementById('blogDisplay').innerHTML = blogs[randomNumber];
}
