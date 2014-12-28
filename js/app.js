$(document).ready(function() {
    $('.items-list')
    	.mouseenter(function() {
			$(this).closest('.items-list').find('.remove').show();
		})
		.mouseleave(function() {
			$(this).closest('.items-list').find('.remove').hide();
		});
	$('.list').sortable();

});