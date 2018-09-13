// Init
const leftPlayer = document.querySelector('#leftPlayer');
const rightPlayer = document.querySelector('#rightPlayer');
const rope = document.querySelector('#rope');
const leftMessageContainer = document.querySelector('.leftMessage small');
let leftMessage = leftMessageContainer.innerHTML;
const rightMessageContainer = document.querySelector('.rightMessage small');
let rightMessage = rightMessageContainer.innerHTML;

// Set
let step = 1;

leftPlayer.style.position = 'absolute';
leftPlayer.style.left = '25%';
leftPlayer.style.top = '45%';

rightPlayer.style.position = 'absolute';
rightPlayer.style.right = '25%';
rightPlayer.style.top = '45%';

rope.style.left = '29%';
message(50, 50);

function moveleft() {
	rope.style.left = parseInt(rope.style.left) - step + '%';

	leftPlayer.style.left = parseInt(leftPlayer.style.left) - step + '%';
	rightPlayer.style.right = parseInt(rightPlayer.style.right) + step + '%';

	leftMessage =
		parseInt(rightPlayer.style.right.replace(/[^0-9]/g, '')) + parseInt(25);
	rightMessage =
		parseInt(leftPlayer.style.left.replace(/[^0-9]/g, '')) + parseInt(25);

	if (rope.style.left <= '12%') {
		gameOver('leftPlayer');
	}
	message(leftMessage, rightMessage);
	changeImg();
}

function moveright() {
	rope.style.left = parseInt(rope.style.left) + step + '%';

	leftPlayer.style.left = parseInt(leftPlayer.style.left) + step + '%';
	rightPlayer.style.right = parseInt(rightPlayer.style.right) - step + '%';

	leftMessage =
		parseInt(rightPlayer.style.right.replace(/[^0-9]/g, '')) + parseInt(25);
	rightMessage =
		parseInt(leftPlayer.style.left.replace(/[^0-9]/g, '')) + parseInt(25);

	if (rope.style.left >= '48%') {
		gameOver('rightPlayer');
	}

	message(leftMessage, rightMessage);
	changeImg();
}

function moveSelection(evt) {
	switch (evt.keyCode) {
		case 68:
			moveleft();
			break;
		case 80:
			moveright();
			break;
		case 37:
			moveleft();
			break;
		case 39:
			moveright();
			break;
	}
}

function message(left, right) {
	leftMessageContainer.innerHTML = left;
	rightMessageContainer.innerHTML = right;
}

function gameOver(win) {
	let section = document.querySelector('section');
	section.style.display = 'none';
	let footer = document.querySelector('.gameOver');
	if (win == 'leftPlayer') {
		document.querySelector('.gameOver small').innerHTML = 'Player 1';
	} else {
		document.querySelector('.gameOver small').innerHTML = 'Player 2';
	}

	footer.style.display = 'flex';
	window.removeEventListener('keydown', moveSelection);

	window.addEventListener('keypress', function(event) {
		event.preventDefault();
		if (event.keyCode === 13 || event.keyCode === 32) {
			document.querySelector('#reloadPage').click();
		}
	});
}

function changeImg() {
	let ropeVal = rope.style.left;
	let leftImgsrc = document.querySelector('#leftPlayer img');
	let leftImgsrcset = document.querySelector('#leftPlayer source');

	let rightImgsrc = document.querySelector('#rightPlayer img');
	let rightImgsrcset = document.querySelector('#rightPlayer source');

	if (ropeVal <= '24%') {
		leftImgsrc.src = 'img/left_2.gif';
		leftImgsrcset.srcset = 'img/left_2.gif';
		rightImgsrc.src = 'img/right_0.gif';
		rightImgsrcset.srcset = 'img/right_0.gif';
	} else if (ropeVal >= '26%' && ropeVal <= '28%') {
		leftImgsrc.src = 'img/left_1.gif';
		leftImgsrcset.srcset = 'img/left_1.gif';
		rightImgsrc.src = 'img/right_0.gif';
		rightImgsrcset.srcset = 'img/right_0.gif';
	} else if (ropeVal >= '30%' && ropeVal <= '32%') {
		leftImgsrc.src = 'img/left_0.gif';
		leftImgsrcset.srcset = 'img/left_0.gif';
		rightImgsrc.src = 'img/right_2.gif';
		rightImgsrcset.srcset = 'img/right_2.gif';
	} else if (ropeVal >= '36%') {
		leftImgsrc.src = 'img/left_0.gif';
		leftImgsrcset.srcset = 'img/left_0.gif';
		rightImgsrc.src = 'img/right_2.gif';
		rightImgsrcset.srcset = 'img/right_2.gif';
	} else {
		leftImgsrc.src = 'img/left_1.gif';
		leftImgsrcset.srcset = 'img/left_1.gif';
		rightImgsrc.src = 'img/right_1.gif';
		rightImgsrcset.srcset = 'img/right_1.gif';
	}
}

// modal
var modal = document.getElementById('modalAbout');
var btn = document.getElementById('btnAbout');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function() {
	modal.style.display = 'block';
};
span.onclick = function() {
	modal.style.display = 'none';
};
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

function reloadPage() {
	window.location.reload();
}

function docReady() {
	window.addEventListener('keydown', moveSelection);
	document.querySelector('#loader').style.display = 'none';
}
