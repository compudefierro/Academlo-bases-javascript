//Getter and setters
const language = {
  set current(name) {
    this.log.push(name);
  },
  get current() {
    return this.log;
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.current);
// Expected output: Array ["EN", "FA"]
