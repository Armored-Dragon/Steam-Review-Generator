const qs = (search) => document.querySelector(search);

qs('#recommend').addEventListener('click', () => changeRecommendState(true));
qs('#not-recommended').addEventListener('click', () => changeRecommendState(false));
qs('#hours-played-input').addEventListener('keyup', (element) => updateData('hoursplayed', element));
qs('#date-posted-input').addEventListener('change', (element) => updateData('date', element));
qs('#review-input').addEventListener('keyup', (element) => updateData('review', element));

function changeRecommendState(state) {
	if (state) {
		qs('#review-icon').src = '/Steam-Review-Generator/img/thumbsup.png';
		qs('#review-title').innerText = 'Recommended';
	} else {
		qs('#review-icon').src = '/Steam-Review-Generator/img/thumbsdown.png';
		qs('#review-title').innerText = 'Not Recommended';
	}
}

function updateData(data_id, data) {
	// Date check
	if (data.target.id === 'date-posted-input') {
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const date_data = {
			month: month[Number(data.target.value.split('-')[1]) - 1],
			day: data.target.value.split('-')[2],
			year: data.target.value.split('-')[0]
		};
		qs(`#${data_id}`).innerText = `${date_data.month} ${date_data.day}, ${date_data.year}`.toUpperCase();
		return;
	}

	// Not a date (I know the feel)
	console.log(data.target.value.toLocaleString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
	qs(`#${data_id}`).innerText = data.target.value.toLocaleString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
