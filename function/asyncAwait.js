
async function callAPI() {
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(JSON.stringify(data))
}
callAPI();