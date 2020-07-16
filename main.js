 var count =0
 $('.mainSwimming').hide();
function showSwim() {
$('.buttons').on("click" ,function() {
	count++;
	if(count %2 !== 0){
	$('.mainSwimming').show();
   }
   else if(count%2 ===0){
   	$('.mainSwimming').hide();
   }
})
}
