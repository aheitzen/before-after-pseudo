var orginalText = $('p.small-font').text();
$('a').hover(
	function () {
    	$('p.small-font').text('is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is.');
	},
	function() {
		$('p.small-font').text(orginalText);
	}
);

