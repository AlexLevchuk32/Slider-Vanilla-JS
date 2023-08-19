let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;

const container = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
	const itemsLeft =
		itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

function setPosition() {
	slider.style.transform = `translateX(${position}px)`;
}

function checkBtns() {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}
