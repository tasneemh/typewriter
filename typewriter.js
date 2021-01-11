const string = "hello there from lighthouse labs";
let time = 0;
let sentence = string + "\n";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, time);
  time += 50;
}
