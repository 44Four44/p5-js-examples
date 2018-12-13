function angle(x1, y1, x2, y2) {
    var initialArm = createVector(100, 0);
    var terminalArm = createVector(x2 - x1, y2 - y1);
    if (y2 <= y1) {
    return initialArm.angleBetween(terminalArm);
    } else {
    return TAU - initialArm.angleBetween(terminalArm); 
    }
}