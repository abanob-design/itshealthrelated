var checkScrollBars = function() {
	var b = $('body');
	var normalw = 0;
	var scrollw = 0;
	if (b.prop('scrollHeight') > b.height()) {
		normalw = window.innerWidth;
		scrollw = normalw - b.width();
		$('#container').css({
			marginRight: '-' + scrollw + 'px'
		});
	}
};

$(function() {
	checkScrollBars();
	$('#showbar').click(function() {
		$('body').css('overflow-y', 'auto');
		checkScrollBars();
	});
	$('#hidebar').click(function() {
		$('body').css('overflow-y', 'hidden');
		checkScrollBars();
	});
});
