document.addEventListener("DOMContentLoaded", function() {

	// Показати мобільну навігацію
	document.querySelector('.sidebar-toggle').addEventListener('click', function() {
	  document.querySelector('.page-overlay').style.display = 'block';
	  document.querySelector('.sidebar').classList.add('visible');
	});

	// Приховати мобільну навігацію
	document.querySelector('.sidebar-hide').addEventListener('click', function() {
	  document.querySelector('.page-overlay').style.display = 'none';
	  document.querySelector('.sidebar').classList.remove('visible');
	});

	// Приховати мобільну навігацію при кліку на overlay
	document.querySelector('.page-overlay').addEventListener('click', function() {
	  this.style.display = 'none';
	  document.querySelector('.sidebar').classList.remove('visible');
	  document.body.classList.remove('locked');
	});


	// Таби
	const tabLinks = document.querySelectorAll('.tab-link');
	tabLinks.forEach(tabLink => {
	  tabLink.addEventListener('click', function() {
	    const tabId = this.getAttribute('data-tab');

	    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('current'));
	    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('current'));
	    this.classList.add('current');

	    const targetPane = document.getElementById(tabId);
	    if (targetPane) {
	      targetPane.classList.add('current');
	    }
	  });
	});
});

