// modify the createRoot call, delete "ReactDOM"
//What Javascript statement in place of "?" will make the result always be between 6 and 7? 
// const x = 2; let y = 4; function update(arg) { return Math.random() + y * arg; } y = 2;  const result = update(x);

const x = 2;
let y = 4;

const update = (arg) => {
  return Math.random() + y * arg
}

y = 3;

const result = update(x)

console.log(result)