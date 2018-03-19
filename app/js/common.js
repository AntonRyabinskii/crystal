// Слайдер программ танцев 

var prog = [
	[], []
];
var	dances;

prog[0][0] = $("#la");
prog[0][1] = $("#st");
prog[1][0] = $("#la_buttonset");
prog[1][1] = $("#st_buttonset");

dance = $("#dances");

prog[0][0].click(function() {
	prog[0][0].addClass("active");
	prog[0][1].removeClass("active");
	prog[1][0].addClass("visual");
	prog[1][1].removeClass("visual");

	dance.removeClass(dances[3][flagSt]);
	dance.addClass(dances[2][flagLa]);
});

prog[0][1].click(function() {
	prog[0][1].addClass("active");
	prog[0][0].removeClass("active");
	prog[1][1].addClass("visual");
	prog[1][0].removeClass("visual");

	dance.removeClass(dances[2][flagLa]);
	dance.addClass(dances[3][flagSt]);
});

// Слайдер танцев

var dances = [
	[], [], [], []
];
var flagLa, flagSt;

flagLa = 0;
flagSt = 0;

dances[0][0] = $("#sa");
dances[0][1] = $("#ch");
dances[0][2] = $("#ru");
dances[0][3] = $("#pd");
dances[0][4] = $("#jv");

dances[1][0] = $("#sw");
dances[1][1] = $("#tg");
dances[1][2] = $("#vw");
dances[1][3] = $("#sf");
dances[1][4] = $("#qs");

dances[2][0] = "sa";
dances[2][1] = "ch";
dances[2][2] = "ru";
dances[2][3] = "pd";
dances[2][4] = "jv";

dances[3][0] = "sw";
dances[3][1] = "tg";
dances[3][2] = "vw";
dances[3][3] = "sf";
dances[3][4] = "qs";

dances[0][0].click(function() {
	clickLa(0)
});
dances[0][1].click(function() {
	clickLa(1)
});
dances[0][2].click(function() {
	clickLa(2)
});
dances[0][3].click(function() {
	clickLa(3)
});
dances[0][4].click(function() {
	clickLa(4)
});


dances[1][0].click(function() {
	clickSt(0)
});
dances[1][1].click(function() {
	clickSt(1)
});
dances[1][2].click(function() {
	clickSt(2)
});
dances[1][3].click(function() {
	clickSt(3)
});
dances[1][4].click(function() {
	clickSt(4)
});


function clickLa (numDance) {
	dances[0][flagLa].removeClass("active")
	dances[0][numDance].addClass("active")
	dance.removeClass(dances[2][flagLa])
	dance.addClass(dances[2][numDance])
	flagLa = numDance
}

function clickSt (numDance) {
	dances[1][flagSt].removeClass("active")
	dances[1][numDance].addClass("active")
	dance.removeClass(dances[3][flagSt])
	dance.addClass(dances[3][numDance])
	flagSt = numDance
}

// Форма записи

var points = [
	[], []
]

var line1, line2, entry, contacts, confirm, btnAdults, btnChild, btnBack, btnDone, age, form

points[0][0] = $("#int_1")
points[0][1] = $("#int_2") 
points[0][2] = $("#int_3") 

points[1][0] = $("#tick_1")
points[1][1] = $("#tick_2") 
points[1][2] = $("#tick_3") 

line1 = $("#line_1")
line2 = $("#line_2")
entry = $("#entry")
confirm = $("#confirm")
contacts = $("#contacts")
btnAdults = $("#button_adults")
btnChild = $("#button_child")
btnBack = $("#back")
btnDone = $("#done")
form = $("#callback")

btnAdults.click(function() {
	toContacts()
	age = "Adult"
});

btnChild.click(function() {
	toContacts()
	age = "Child"
});

btnBack.click(function() {
	toEntry()
});

form.submit(function() {
	$.ajax({
		type: "POST",
		url: "../mail.php",
		data: form.serialize()
	})
	toConfirm()
	return false
});

function toContacts() {
	entry.removeClass("active_entry")
	contacts.addClass("active")
	points[0][0].removeClass("visual")
	points[1][0].addClass("visual")
	points[0][1].addClass("active_int")
	line1.addClass("active_line")
}

function toEntry() {
	contacts.removeClass("active")
	entry.addClass("active_entry")
	points[1][0].removeClass("visual")
	points[0][0].addClass("visual")
	points[0][1].removeClass("active_int")
	line1.removeClass("active_line")
}

function toConfirm() {
	contacts.removeClass("active")
	confirm.addClass("active")
	points[0][1].removeClass("visual")
	points[1][1].addClass("visual")
	points[0][2].addClass("active_int")
	line2.addClass("active_line")
}

console.log($("#history"));

$("#history").click(function{
	$("#history").animate({
		'border-bottom':'none'
	});
});


$("#history").click(function{
	$("#history").removeClass("active")
});
// Карта

ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.970944, 30.394728],
        zoom: 16,
        behaviors: ['ruler', 'scrollZoom']	
    });
};

myMap.behaviors.disable('ruler');

// Подменю о клубе






