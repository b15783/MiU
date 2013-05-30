// Craig Schultz
// Date:  May 15, 2013
// Week 2
// MiU 1305


$(function(){
$(".searchPet").click(function(){
	var nameArg=document.getElementById("searchInput");
	for(var i=0, j=localStorage.length; i<j; i++){
		var key = localStorage.key(i);
			value = localStorage.getItem(key);
		if (nameArg === value.name[1]){
			console.log(value.name[1] + " found.");
			}
		}
}
});
