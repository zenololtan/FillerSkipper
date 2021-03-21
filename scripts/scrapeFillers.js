// when ran on animefillerlist.com it will parse the filler episodes to json format

var collection = document.getElementsByClassName('filler');
var i;
var fillers = [];
var show;

// get name of show
show = window.location.pathname.split("/")[2].replace("-", " ");
console.log(show);

// make colletion of all the episodes
for (i = 1; collection[i]; i++) {
	var item = collection[i].getElementsByClassName('Number');
	fillers.push(item.item(0).innerHTML);
}

//parse the collection to json format
var obj = fillers.reduce((map, filler) => { 
    map.fillers.push( { episode: filler} );
    return map;
}, { fillers: []})
console.log(JSON.stringify(obj, null, 4));
