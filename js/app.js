$(document).ready(function() {
	function addItem () {
    	var input = $('#myInput').val();
    	var tr_input = $.trim(input); 
			if(tr_input.length > 0){
  			//Proced further
				$('.list')
    				.append("<li class='items-list'><div class='box-unchecked'><i class='fa fa-square-o'></i></div><span class='text-unchecked'>" + input + "</span><div class= 'remove'><i class='fa fa-trash'></i></div></li><div class='clear>&nbsp;</div>");
				$('#myInput').val('');
			}
			else{
  			//some error handlings.
			$('#myInput').val('');
			return false; // If it is form submit
			}
		}

	$('#myButton').on('click', addItem);
	// $('#myButton').on('click',function() {
	// 	$('#myInput').removeData(input);
	// });

  //   $('.items-list')
  //   	.mouseenter(function() {
		// 	$(this).closest('.items-list').find('.remove').show();
		// })
		// .mouseleave(function() {
		// 	$(this).closest('.items-list').find('.remove').hide();
		// });

    $('.list').on("mouseenter",".items-list",function() {
    	$(this).closest('.items-list').find('.remove').show();
    });
	$('.list').on("mouseleave",".items-list",function() {
    	$(this).closest('.items-list').find('.remove').hide();
    });

	$('.list').sortable();

	// $('.box-unchecked').on('click','i',function() {
	// 	$(this).closest('.fa').toggleClass('fa-check-square');
	// 	$(this).closest('.items-list').find('.text-unchecked').toggleClass('text-checked');
	// });


	$('.list').on('click','.box-unchecked i',function() {
		$(this).closest('.fa').toggleClass('fa-check-square');
		$(this).closest('.items-list').find('.text-unchecked').toggleClass('text-checked');
	});


	// $('.remove').on('click','i',function() {
	// 	$(this).closest('li').fadeOut(600, function() {
	// 		$(this).remove();
	// 	});
	// });

	$('.list').on('click','.remove',function() {
		$(this).closest('li').fadeOut(600, function() {
			$(this).remove();
		});
	});


});