const galleryFilter = document.querySelector('.gallery-filter'),
	galleryItems = document.querySelectorAll('.gallery-item');

galleryFilter.addEventListener('click', (event) => {
	if (event.target.classList.contains('filter-item')) {
		// deactivate existing active 'filter-item'
		galleryFilter.querySelector('.active').classList.remove('active');
		// activate new 'filter-item'
		event.target.classList.add('active');
		const filterValue = event.target.getAttribute('name');
		galleryItems.forEach((item) => {
			if (item.classList.contains(filterValue) || filterValue === 'all') {
				item.classList.remove('hide');
				item.classList.add('show');
			} else {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		});
	}
});
