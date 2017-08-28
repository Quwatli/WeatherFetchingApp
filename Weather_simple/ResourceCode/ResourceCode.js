
console.log("First");

setTimeout(() => {
    console.log("Two second time out");
}, 2000);

setTimeout(() => {
    console.log("Zero time out");
}, 0);

console.log("Last");