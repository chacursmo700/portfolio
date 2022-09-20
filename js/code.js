var dbase = {
	"htmlbar": 5,
	"cssbar": 1,
	"layoutbar": 2,
	"responsebar": 0,
	"jsbar": 2,
	"gitbar": 0,
	"vimbar": 2 
};


for (var key in dbase) {
	if (dbase.hasOwnProperty(key)) {
		var temp = document.getElementById(key);
		temp.value = dbase[key];
	}

}
