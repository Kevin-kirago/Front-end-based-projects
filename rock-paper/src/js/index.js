window.state = {
	isPlaying: true,
};

// varibale
let playBoard, scoreBoard, rock, paper, scisssors;
playBoard = document.querySelector(".content__playboard");
scoreBoard = document.querySelector(".content__scoreboard");

if (state.isPlaying) {
	playBoard.display = "grid";
	scoreBoard.display = "none";
} else {
	playBoard.display = "none";
	scoreBoard.display = "flex";
}
