var blogs = [
  "https://evolutionsisfun.blogspot.com/",
  "https://aczapkay.blogspot.com",
  "https://evolutionwithdelaney.blogspot.com/",
"https://aaronsfaulk.blogspot.com/",
"https://morgandyh.blogspot.com/",
"https://evolutionf20al.blogspot.com/",
"https://johnathanmartinosu.blogspot.com/",
"https://abbimeek22.blogspot.com/",
"https://kaelynpage.blogspot.com/",
"https://catalinaperezzz.blogspot.com/",
"https://emmaphilbin.blogspot.com/",
"https://morgankkate.blogspot.com",
"https://jsisov.blogspot.com",
"https://laurenoliviasuggs.blogspot.com",
"https://aubreevanmeter.blogspot.com",
"https://cassidyvaughnevolution.blogspot.com/",
"Not set up yet - click again",
"https://evolution-hayley.blogspot.com/",
"https://pkwevolution.blogspot.com",
"https://Jessicavenardevolution.blogspot.com"
]

function newBlog() {
  var randomNumber = Math.floor(Math.random() * (blogs.length));
  document.getElementById('blogDisplay').innerHTML = blogs[randomNumber];
}
