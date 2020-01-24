(() => {
	// this is a module pattern, also called iife. Query selector does the same thing like in CSS where it grabs what you're asking for in the html
	const mySpan = document.querySelector('main span'),
		  bananaSVG = document.querySelector('.bananaLeaf');

	function toggleSelected() {
		// we want to add some kind of indicator that someone has selected an icon

		//debugger;
		this.classList.toggle('selected');
	}


	// set up our triggers here. A click is something you do with the mouse... same with a page reload or form submission, etc.
	mySpan.addEventListener('click', toggleSelected);
	bananaSVG.addEventListener('click', toggleSelected);

})();

