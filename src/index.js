var hello = document.getElementById("hello");

var typewriter = new Typewriter(hello, {
  loop: false,
  cursor: " ",
});

typewriter.pauseFor(2500).typeString("hello").start();
