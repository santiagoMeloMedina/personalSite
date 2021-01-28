
function getLegPythagoras(hypotenuse, leg) {
    return Math.sqrt((hypotenuse*hypotenuse) - (leg*leg));
}

function getRandomCirclePosition(size) {
    let side = size/2;
    let x = Math.random()*side;
    let range = getLegPythagoras(side, x);
    let y = Math.random()*range;
    let x_options = [x, -x];
    let y_options = [y, -y];
    return [x_options[Math.floor(Math.random()*2)], y_options[Math.floor(Math.random()*2)]];
}

module.exports = {
    getRandomCirclePosition
}