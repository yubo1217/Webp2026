var container = document.getElementById('container');
var head = 0;
var str = "";

window.onload = function() {
    add_new_chars();
};

window.addEventListener("keyup", function(e) {
  console.log(e.key);
  if (e.key === str[head]) {
    str = str.substring(0, head) + " " + str.substring(head + 1);
    container.textContent = str;
    head += 1;
  }
  add_new_chars();
});

function add_new_chars() {
    var n = Math.floor(Math.random() * 3) + 1; 
    var result = "";
    while (n > 0) {
        result += randomLetter();
        n--; 
    }
    str += result;
    container.textContent = str;
}

function randomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}
