const loadMore = document.getElementById('infi-list');
const Box = document.querySelector('.infi-list-class');

function ScrollMore(loading = 10){
	for (let i = 0; i < loading; i++) {
	const LI = document.createElement('li');
	LI.classList.add('infi-list-li-class');
	LI.textContent = `Item ${Box.children.length}`
	Box.appendChild(LI);
	}
}

ScrollMore();

Box.addEventListener('scroll', () => {
	if (Box.scrollTop + Box.clientHeight >= Box.scrollHeight - 10){
		ScrollMore(2);
	}
});