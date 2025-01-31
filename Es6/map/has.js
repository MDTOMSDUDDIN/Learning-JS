let map=new Map()

map.set('key1',"Bangladesh");
map.set('key2',"India");
map.set('key3',"America");
map.set('key4',"Pakistan");

if(map.has('key3')){
    console.log("Yes");
}else{
    console.log("No");
}