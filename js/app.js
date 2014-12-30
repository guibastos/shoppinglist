$(document).ready(function() {
	function addItem () { 
    	var input = $('#myInput').val();
    	var tr_input = $.trim(input); 
			if(tr_input.length > 0) {
				$('.list')
    				.append($("<li class='items-list'><div class='box-unchecked'><i class='fa fa-square-o'></i></div><span class='text-unchecked'>" + tr_input + "</span><div class= 'remove'><i class='fa fa-trash'></i></div></li>").hide().fadeIn(600));
				$('#myInput').val('');
				}
			else {
				$('#myInput').val('');
				return false;
			}
		}

	$('#myButton').on('click', addItem);

	
	$('#myInput').on('keydown',function(e){
    	if(e.which==13) {
        addItem();
    	}
	});


    $('.list').on("mouseenter",".items-list",function() {
    	$(this).closest('.items-list').find('.remove').show();
    });

	$('.list').on("mouseleave",".items-list",function() {
    	$(this).closest('.items-list').find('.remove').hide();
    });

	$('.list').sortable();

	$('.list').on('click','.box-unchecked i',function() {
		$(this).closest('.fa').toggleClass('fa-check-square');
		$(this).closest('.items-list').find('.text-unchecked').toggleClass('text-checked');
	});

	$('.list').on('click','.remove',function() {
		$(this).closest('li').fadeOut(600, function() {
			$(this).remove();
		});
	});


});