var checkPoints = [{
    name: "Bus stand"
}, {
    name: "Departure gate"
}, {
    name: "Ticket counter"
}, {
    name: "Security"
}];

var svg = d3.select("svg");
var main = svg.append("g").attr({
    "transform": "translate(50)"
});
main.selectAll("circle")
    .data(checkPoints)
    .enter()
    .append("circle")
    .attr({
        cx: function(d, i) {
            return i * 100;
        },
        cy: 100,
        r: 5
    });