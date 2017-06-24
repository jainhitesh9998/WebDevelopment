// check off specific todos by clicking
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed");
});
//click on x to delete todos
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//get the todo text
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+" </li>");
	}
});$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});