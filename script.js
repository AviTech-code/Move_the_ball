let circle = document.getElementById('cir');
let moveBy = 10;
let height = window.innerHeight;
let width = window.outerWidth;


let ballX = 0;
let ballY = 0;

circle.style.left = ballX + 'px';
circle.style.top = ballY + 'px';


window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
    // circle.style.margin = 55 + 'px';
})




window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'A':

            ballX -= moveBy;
            // console.log(ballX);
            break;

        case 'D':
            //    console.log(ballX);
            ballX += moveBy;
            break;
        case 'W':
            ballY -= moveBy;
            break;
        case 'S':
            // console.log(ballY);
            //  console.log(parseInt(width - circle.offsetWidth));
            ballY += moveBy;
            break;
    }
    if (ballX < 0) {
        ballX = 0;
    }
    else if (ballX > width - circle.offsetWidth) {
        ballX = (width - circle.offsetWidth);
    }
    if (ballY < 0) {
        ballY = 0;
    }
    else if (ballY > height - circle.offsetHeight) {
        ballY = (height - circle.offsetHeight);
    }
    circle.style.left = (ballX) + 'px';
    circle.style.top = (ballY) + 'px';
});
