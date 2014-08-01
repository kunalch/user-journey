var checkPoints = [{
    name: "Bus stand"
}, {
    name: "Departure gate"
}, {
    name: "Ticket counter"
}, {
    name: "Security"
}, {
    name: "Waiting"
}, {
    name: "Boarding"
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

main.selectAll("line.checkpoint-link")
    .data(checkPoints.slice(0, checkPoints.length - 1))
    .enter()
    .append("line")
    .attr({
        class: "checkpoint-link",
        x1: function(d, i) {
            return i * 100;
        },
        x2: function(d, i) {
            return (i + 1) * 100;
        },
        y1: 100,
        y2: 100,
    })
    .style({
        stroke: "black"
    });

main.selectAll("line.info-link")
    .data(checkPoints)
    .enter()
    .append("line")
    .attr({
        class: 'info-link',
        x1: function(d, i) {
            return i * 100;
        },
        x2: function(d, i) {
            return i * 100;
        },

        y1: 100,
        y2: 150
    })
    .style({
        stroke: "green"
    });

main.selectAll("rect.info")
    .data(checkPoints)
    .enter()
    .append("rect")
    .attr({
        class: 'info',
        x: function(d, i) {
            return i * 100 - 40;
        },
        y: 150,
        width: 80,
        height: 30
    })
    .style({
        fill: "green"
    });

main.selectAll("text")
    .data(checkPoints)
    .enter()
    .append("text")
    .attr({
        x: function(d, i) {
            return i * 100;
        },
        y: 170
    })
    .text(function(d) {
        return d.name;
    })
    .style({
        fill: "white",
        "text-anchor": "middle"
    });