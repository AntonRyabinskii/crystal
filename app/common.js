// Слайдер программ танцев 

var prog = [
	[], []
];
var	dance;

var descriptions = [
	[], []
]

var forFlag = 1
var visualFlag

var danceImages = [
	[], []
]

for (let i = 0; i<2; i++) {
	for (let j = 0; j<5; j++) {
		descriptions[i][j] = $(".dance_description:nth-child(" + (forFlag) + ")")
		forFlag++
	}
}

forFlag = 1

for (let i = 0; i<2; i++) {
	for (let j = 0; j<5; j++) {
		danceImages[i][j] = $(".dance_image:nth-child(" + (forFlag) + ")")
		forFlag++
	}
}


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

	danceImages[1][flagSt].animate({
		'opacity':'0'
	},
	{
		done:function(){
			danceImages[0][flagLa].animate({
				'opacity':'1'
			})
		}
	})

	if (visualFlag == true) {
		descriptions[1][flagSt].animate({
			'opacity':'0'
		},
		{
			done:function(){
				descriptions[1][flagSt].hide()
				descriptions[0][flagLa].show()
				descriptions[0][flagLa].animate({
				'opacity':'1'
				})
			}
		})
	}
	descriptions[0][flagLa].addClass("active")
	descriptions[1][flagSt].removeClass("active")
});

prog[0][1].click(function() {
	prog[0][1].addClass("active");
	prog[0][0].removeClass("active");
	prog[1][1].addClass("visual");
	prog[1][0].removeClass("visual");

	danceImages[0][flagLa].animate({
		'opacity':'0'
	},
	{
		done:function(){
			danceImages[1][flagSt].animate({
				'opacity':'1'
			})
		}
	})

	if (visualFlag == true) {

		descriptions[0][flagLa].animate({
			'opacity':'0'
		},
		{
			done:function(){
				descriptions[0][flagLa].hide()
				descriptions[1][flagSt].show()
				descriptions[1][flagSt].animate({
				'opacity':'1'
				})
			}
		})
	}
	descriptions[0][flagLa].removeClass("active")
	descriptions[1][flagSt].addClass("active")
});

// Слайдер танцев

var dances = [
	[], []
];
var flagLa, flagSt;
var buttonAboutDance = $("#about_dance")
var danceDescription = $(".description_of_dances")
var buttonRollUp = $("#roll_up")
var dancesTimeFlag 

flagLa = 0;
flagSt = 0;

for (let i = 0; i<5; i++) {
	dances[0][i] = $(".dance_button_la:nth-child(" + (i + 1) + ")")
	dances[1][i] = $(".dance_button_st:nth-child(" + (i + 1) + ")")
}

for (let i = 0; i<5; i++) {
	dances[0][i].click(function() {
		clickLa(i)
		setTimeout(function(){dancesTimeFlag = 0}, 800)
	});

	dances[1][i].click(function() {
		clickSt(i)
		setTimeout(function(){dancesTimeFlag = 0}, 800)
	});
}


buttonAboutDance.click(function() {
	showDescription()
	return false
})

buttonRollUp.click(function() {
	hideDescription()
	return false
})



function clickLa (numDance) {
	if ((dancesTimeFlag == 1) || (numDance == flagLa)) { return }
	dancesTimeFlag = 1
	dances[0][flagLa].removeClass("active")
	dances[0][numDance].addClass("active")

	danceImages[0][flagLa].animate({
		'opacity':'0'
	},
	{
		done:function(){
			danceImages[0][numDance].animate({
				'opacity':'1'
			})
			
		}
	})

	if (visualFlag == true) {

		descriptions[0][flagLa].animate({
			'opacity':'0'
		},
		{
			done:function(){
				descriptions[0][flagLa].hide()
				descriptions[0][numDance].show()
				descriptions[0][numDance].animate({
				'opacity':'1'
				})
				
			}
		})
	}
	descriptions[0][flagLa].removeClass("active")
	descriptions[0][numDance].addClass("active")
	setTimeout(function(){flagLa = numDance}, 800)
}

function clickSt (numDance) {
	if ((dancesTimeFlag == 1) || (numDance == flagSt)) { return }
	dancesTimeFlag = 1
	dances[1][flagSt].removeClass("active")
	dances[1][numDance].addClass("active")

	danceImages[1][flagSt].animate({
		'opacity':'0'
	},
	{
		done:function(){
			danceImages[1][numDance].animate({
				'opacity':'1'
			})
		}
	})

	if (visualFlag == true) {

		descriptions[1][flagSt].animate({
			'opacity':'0'
		},
		{
			done:function(){
				descriptions[1][flagSt].hide()
				descriptions[1][numDance].show()
				descriptions[1][numDance].animate({
				'opacity':'1'
				})
				
			}
		})
	}
	descriptions[1][flagSt].removeClass("active")
	descriptions[1][numDance].addClass("active")
	setTimeout(function(){flagSt = numDance}, 800)
}

function showDescription() {
	for (let i = 0; i<2; i++) {
		for (let j = 0; j<5; j++) {
			if (descriptions[i][j].hasClass("active") == true) {
				descriptions[i][j].hide()
				descriptions[i][j].css('opacity', '1')
				descriptions[i][j].slideToggle()
				buttonAboutDance.hide()
				buttonRollUp.show()
				visualFlag = true
				return
			}
		}
	}	
}

function hideDescription() {
	for (let i = 0; i<2; i++) {
		for (let j = 0; j<5; j++) {
			if (descriptions[i][j].hasClass("active") == true) {
				descriptions[i][j].slideToggle(function() {
					descriptions[i][j].css('opacity', '0')
				})
				descriptions[i][j].show()
				buttonRollUp.hide()
				buttonAboutDance.show()
				visualFlag = false
				return
			}
		}
	}
}

// Форма записи

var points = [
	[], []
]

var line1, line2, entry, contacts, confirm, btnAdults, btnChild, btnBack, btnDone, age, form, btnToFirst

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
btnToFirst = $("#to_first_step")
line = $("#line")
steps = $("#steps")
forChild = $("#for_child")
forAdults = $("#for_adults")
containerForContacts = $(".entry_container")

var $insideForChild, $insideForAdults, childFlag, adultsFlag

childFlag = 0
adultsFlag = 0

$insideForAdults = $("#inside_for_adults")
$insideForChild = $("#inside_for_child")

btnChild.mouseover(function() {
	$insideForChild.stop(true)
	$insideForChild.animate({
		'background-size':'850px'
	}, 1500, 'easeOutCirc')
})

btnChild.mouseout(function() {
	$insideForChild.stop(true)
	$insideForChild.animate({
		'background-size':'800px'
	}, 1500, 'easeOutQuad')
})

btnAdults.mouseover(function() {
	$insideForAdults.stop(true)
	$insideForAdults.animate({
		'background-size':'750px'
	}, 1500, 'easeOutCirc')
})

btnAdults.mouseout(function() {
	$insideForAdults.stop(true)
	$insideForAdults.animate({
		'background-size':'700px'
	}, 1500, 'easeOutQuad')
})

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

btnToFirst.click(function() {
	toFirst()
});

form.submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: form.serialize()
	})
	toConfirm()
	return false
});


function toContacts() {
	forAdults.animate({
		'right':'-100%'
	},
	{
		done: function() {
			entry.css('display', 'none')
			containerForContacts.css('z-index', '0')
		}
	})
	forChild.animate({
		'left':'-100%'
	})
}

/*function toContacts() {
	entry.removeClass("active_entry")
	contacts.addClass("active")
	points[0][0].removeClass("visual")
	points[1][0].addClass("visual")
	points[0][1].addClass("active_int")
	line1.addClass("active_line")
	line.css('display', 'flex')
	steps.css('display', 'block')
}*/

function toEntry() {
	entry.css('display', 'flex')
	containerForContacts.css('z-index', '-1')
	forChild.animate({
		'left':'0%'
	})
	forAdults.animate({
		'right':'-0%'
	})
}

/*function toEntry() {
	contacts.removeClass("active")
	entry.addClass("active_entry")
	points[1][0].removeClass("visual")
	points[0][0].addClass("visual")
	points[0][1].removeClass("active_int")
	line1.removeClass("active_line")
}*/

/*function toConfirm() {
	contacts.removeClass("active")
	confirm.addClass("active")
	points[0][1].removeClass("visual")
	points[1][1].addClass("visual")
	points[0][2].addClass("active_int")
	line2.addClass("active_line")
}*/

function toConfirm() {
	contacts.css('display', 'none')
	confirm.css('display', 'flex')
}

/*function toFirst() {
	confirm.removeClass("active")
	entry.addClass("active_entry")
	points[1][0].removeClass("visual")
	points[1][1].removeClass("visual") 
	points[1][2].removeClass("visual")
	points[0][0].addClass("visual")
	points[0][1].addClass("visual")
	points[0][2].addClass("visual")
	line1.removeClass("active_line")
	line2.removeClass("active_line")
	points[0][1].removeClass("active_int")
	points[0][2].removeClass("active_int")  
}*/

function toFirst() {
	entry.css('display', 'flex')
	containerForContacts.css('z-index', '-1')
	forChild.animate({
		'left':'0%'
	})
	forAdults.animate({
		'right':'-0%'
	},{
		done:function(){
			contacts.css('display', 'flex')
			confirm.css('display', 'none')
		}
	}) 
}


// Линии в меню

var lines = []             
var links = []

for (let i = 0; i < 5; i++) {
	lines[i] = $(".about_menu_item:nth-child(" + (i + 1) + ") #menu_line")
	links[i] = $(".about_menu_item:nth-child(" + (i + 1) + ") a")
}

for (let i = 0; i < 5; i++) {
	links[i].mouseover(function(){ lineAnimationForward(i) });
	links[i].mouseout(function(){ lineAnimationBack(i) });
}

function lineAnimationForward(num) {
	lines[num].stop(true)
	lines[num].animate({
		'width':'100%'
	}, 'fast')
} 

function lineAnimationBack(num) {
	lines[num].stop(true)
	if (links[num].hasClass("active")) {
		return
	}
	lines[num].animate({
		'width':'0'
	}, 'fast')
}

// Большой слайдер

var arrows = []
var areas = []
var bigSlides = []
var circles = []
var flag = 0
var timeFlag = 0

arrows[0] = $("#left")
arrows[1] = $("#right")

areas[0] = $("#for_left_arrow")
areas[1] = $("#for_right_arrow")

for (let i = 0; i < 2; i++) {
	bigSlides[i] = $(".big_slide:nth-child(" + (i + 1) + ")")
	circles[i] = $(".circle:nth-child(" + (i + 1) + ")")
}

console.log(arrows[0])
console.log(areas[0])
console.log(bigSlides[0])

if ($(window).width() > '1200') {
	areas[0].mouseover(function(){ bigArrow(0, 'left')})
	areas[1].mouseover(function(){ bigArrow(1, 'right')})

	areas[0].mouseout(function(){ smallArrow(0, 'left')})
	areas[1].mouseout(function(){ smallArrow(1, 'right')})
}

function bigArrow(num, side) {
	arrows[num].stop(true, true)
	arrows[num].animate({
		'height':'85px',
		'width':'85px',
		'top':'-=5px'
	}, 'fast')
	if (side == 'left') {
		arrows[num].animate({
		'left':'-=5px'
		}, {queue:false, duration:200})
	} else {
		arrows[num].animate({
		'right':'-=5px'
		}, {queue:false, duration:200})
	}
}

function smallArrow(num, side) {
	arrows[num].stop(true, true)
	arrows[num].animate({
		'height':'75px',
		'width':'75px', 
		'top':'45%'
	}, 'fast')
	if (side == 'left') {
		arrows[num].animate({
		'left':'5%'
		}, {queue:false, duration:200})
	} else {
		arrows[num].animate({
		'right':'5%'
		}, {queue:false, duration:200})
	}
}

var ua = navigator.userAgent,
event = (ua.match(/iPad/i)) ? "touchstart" : "click"; 
//Если имеем дело с iPad - touchstart, иначе - событие click;



areas[0].on(event, function() {
	slide('right')
	setTimeout(function(){ timeFlag = 0 }, 400) 
});

areas[1].on(event, function() {
	slide('left')
	setTimeout(function(){ timeFlag = 0 }, 400) 
});

function slide(side) {
	if (side == 'left') {
		if ((flag == 1) || (timeFlag == 1)) { return }
		timeFlag = 1
		bigSlides[flag+1].show()
		bigSlides[flag].css('position', 'absolute')
		bigSlides[flag+1].css('position', 'relative')
		bigSlides[flag].animate({
			'right':'100%'
		})
		bigSlides[flag+1].animate({
			'right':'0'
		},
		{
			done: function(){
				bigSlides[flag].hide()
				circles[flag].removeClass("big_circle")
				flag+=1
				circles[flag].addClass("big_circle")
			}
		})	
	} else {
		if ((flag == 0) || (timeFlag == 1)) { return }
		timeFlag = 1
		bigSlides[flag-1].show()
		bigSlides[flag].css('position', 'absolute')
		bigSlides[flag-1].css('position', 'relative')
		bigSlides[flag].animate({
			'right':'-100%'
		})
		bigSlides[flag-1].animate({
			'right':'0'
		},
		{
			done: function() {
				bigSlides[flag].hide()
				circles[flag].removeClass("big_circle")
				flag-=1
				circles[flag].addClass("big_circle")
			}
		})	
	}
}

// Маленький слайдер
	
var arrowsSmall = []
var smallSlides = []
var flagSmall = 0
var counter = $("#counter")
var counterSmall = $("#counter strong")
var textForCounter

arrowsSmall[0] = $("#arrow_left")
arrowsSmall[1] = $("#arrow_right")

for (let i = 0; i < 7; i++) {
	smallSlides[i] = $(".slide:nth-child(" + (i + 1) + ")")
}

arrowsSmall[0].click(function(){ smallSlide("left") })
arrowsSmall[1].click(function(){ smallSlide("right") })

function smallSlide(side) {
	if (side == "right") {
		if (flagSmall == 6){ return }
		smallSlides[flagSmall].animate({
			'opacity':'0'
		},
		{
			done: function() {
				smallSlides[flagSmall].animate({
					'opacity':'1'
				})
				textForCounter = (flagSmall+1) + "/7"
				counterSmall.text(textForCounter)
			}
		})
		smallSlides[flagSmall+1].css('position', 'relative')
		smallSlides[flagSmall].css('position', 'absolute')
		flagSmall+=1
	} else {
		if (flagSmall == 0){ return }
		smallSlides[flagSmall].animate({
			'opacity':'0'
		},
		{
			done: function() {
				smallSlides[flagSmall].animate({
					'opacity':'1'
				})
				textForCounter = (flagSmall+1) + "/7"
				counterSmall.text(textForCounter)
			}
		})
		smallSlides[flagSmall-1].css('position', 'relative')
		smallSlides[flagSmall].css('position', 'absolute')
		flagSmall-=1
	}
}

// Карта

/* ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.970944, 30.394728],
        zoom: 16,
        behaviors: ['ruler', 'scrollZoom']	
    });
};

myMap.behaviors.disable('ruler'); */

function initMap() {
  	var uluru = {lat: 59.970944, lng: 30.394728};
 	var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 16,
    	center: uluru,
    	styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

  	});


  	var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'img/map_pointer.png'
    });
}

// fullpage


$(document).ready(function() {
    $('#fullPage').fullpage({
    	navigation: true
    });
});

