var topNavList = document.querySelector('#top-nav-list');
var topNavToggle = document.querySelector('#top-nav-toggle');
var navCollapsed = true;

topNavToggle.addEventListener('click', function(){
	if(navCollapsed === true) {
		topNavList.classList.remove('nav-list-collapse');
		topNavToggle.innerHTML = '<span class="fa fa-times" aria-hidden="true"></span>';
		navCollapsed = false;
	} else {
		topNavList.classList.add('nav-list-collapse');
		navCollapsed = true;
		topNavToggle.innerHTML = '<span class="fa fa-bars" aria-hidden="true"></span>';
	}
});