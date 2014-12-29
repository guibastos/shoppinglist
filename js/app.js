$(document).ready(function() {
    $('.items-list')
    	.mouseenter(function() {
			$(this).closest('.items-list').find('.remove').show();
		})
		.mouseleave(function() {
			$(this).closest('.items-list').find('.remove').hide();
		});
	$('.list').sortable();
	$('.box-unchecked').on('click','i',function() {
		$(this).closest('.fa').toggleClass('fa-check-square');
		$(this).closest('.items-list').find('.text-unchecked').toggleClass('text-checked');
	});
	$('.remove').on('click','i',function() {
		$(this).closest('li').fadeOut(600, function() {
			$(this).remove();
		});
	});
});