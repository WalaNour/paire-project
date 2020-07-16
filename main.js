var count=0;
var count1=0;
      $('.mainAmer').hide();
      $('.mainVolleyball').hide();
      $('.mainSwimming').hide();
function showSwim(){
	count++;
	if(count%2 !==0){
		$('.mainSwimming').show();
		$('.mainVolleyball').hide();
	}
	else if (count%2===0){
		$('.mainSwimming').hide()
	}
}

function showVoll(){
	count++;
	if(count%2 ===0){
		$('.mainSwimming').hide()
		$('.mainVolleyball').show();
	}
	else if (count%2 !==0){
		$('.mainVolleyball').hide()
	}
}
function showAmer(){
	count++;
	if(count%2 !== 0){
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainAmer').show()
	}
	else if(count%2 === 0){
		$('.mainAmer').hide()
	}
}


