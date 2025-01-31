let map=new Map()

map.set('key1',"Bangladesh");
map.set('key2',"India");
map.set('key3',"America");
map.set('key4',"Pakistan");

// for (let MyVal of map.values()){
//     console.log(MyVal);
// }

for (let props of map.keys()){
    console.log(props);
}