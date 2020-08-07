/* Predefine all JXG options. */
JXG.Options.board.axis = true;
JXG.Options.board.pan = {enabled: false};
JXG.Options.board.zoom = {enabled: false};
JXG.Options.board.keepaspectratio = true;
JXG.Options.board.showCopyright = false;
JXG.Options.board.showNavigation = false;
JXG.Options.board.boundingbox = [-6, 6, 6, -6];

JXG.Options.text.cssDefaultStyle = '';
JXG.Options.text.fontSize = 14;
JXG.Options.text.useMathJax = true;

JXG.Options.elements.strokeWidth = 2;
JXG.Options.elements.fixed = true;
JXG.Options.elements.highlight = false;

JXG.Options.infobox.strokeColor = "black";
JXG.Options.infobox.fontSize = 14;

JXG.Options.axis.strokeColor = "black";
JXG.Options.axis.strokeOpacity = 0.4;
JXG.Options.axis.withLabel = true;
JXG.Options.axis.lastArrow = false;
JXG.Options.axis.ticks.strokeColor = "black";
JXG.Options.axis.ticks.strokeOpacity = 0.15;
JXG.Options.axis.ticks.minorTicks = 0;
JXG.Options.axis.ticks.label.strokeOpacity = 0.4;
JXG.Options.axis.label.position = 'rt';
JXG.Options.axis.label.color = 'purple';
JXG.Options.axis.label.offset = [-22, -18];
JXG.Options.axis.label.strokeOpacity = 0.5;

JXG.Options.line.strokeOpacity = 0.4;

JXG.Options.circle.strokeOpacity = 0.4;

JXG.Options.point.strokeColor = "white";
JXG.Options.point.strokeWidth = 3;
JXG.Options.point.size = 5;

JXG.Options.slider.withTicks = false;
JXG.Options.slider.baseline.lastArrow = {type: 3, size: 7};
JXG.Options.slider.baseline.firstArrow = {type: 3, size: 7};
JXG.Options.slider.baseline.strokeOpacity = 1;
JXG.Options.slider.highline.strokeOpacity = 1;

JXG.Options.angle.strokeOpacity = 0.4;
JXG.Options.angle.fillOpacity = 0;

JXG.Options.segment.strokeColor = "black";
JXG.Options.segment.strokeOpacity = 0.4;

JXG.Options.curve.strokeOpacity = 0.4;
JXG.Options.curve.strokeWidth = 2;

JXG.Options.riemannsum.strokeWidth = 0;
JXG.Options.riemannsum.fillOpacity = 0.3;
JXG.Options.riemannsum.fillColor = "lime";

JXG.Options.arrow.strokeColor = "black";
JXG.Options.arrow.strokeOpacity = 0.4;

/* Log all current global options. */
// console.log(JXG.Options);

/* Setup default event listener. */
window.addEventListener('load', initBoard);

/* Round n to nDecimals. */
var myRound = function(n, nDecimals) {
    decShift = Math.pow(10, nDecimals);

    return Math.round(n * decShift) / decShift;
}

/* Interpolate x given two JSX points and a lambda. */
function JSX_interpolateX(p1, p2, l) {
    return p1.X() + (p2.X() - p1.X()) * l;
}

/* Interpolate y given two JSX points and a lambda. */
function JSX_interpolateY(p1, p2, l) {
    return p1.Y() + (p2.Y() - p1.Y()) * l;
}

/* Calculate the center of mass x-value of a list of points and weights. */
function JSX_CoMX(points, weights) {
    var W = weights.reduce((a, b) => a + b, 0) + 0.0001;

    var X = 0;
    for(var i = 0; i < weights.length; i++) {
        X += weights[i] * points[i].X()
    }

    return X / W;
}

/* Calculate the center of mass y-value of a list of points and weights. */
function JSX_CoMY(points, weights) {
    var W = weights.reduce((a, b) => a + b, 0) + 0.0001;

    var Y = 0;
    for(var i = 0; i < weights.length; i++) {
        Y += weights[i] * points[i].Y()
    }

    return Y / W;
}
