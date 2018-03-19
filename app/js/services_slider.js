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
		}, {queue:false, 'fast'})
	} else {
		arrows[num].animate({
		'right':'-=5px'
		}, {queue:false, 'fast'})
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
		}, {queue:false, 'fast'})
	} else {
		arrows[num].animate({
		'right':'5%'
		}, {queue:false, 'fast'})
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