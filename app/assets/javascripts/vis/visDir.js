angular.module('visOne')
  .directive('donutChart', function () {

    return {
      link: link,
      restrict: 'E'
    }

    function link(scope, element) {
    // the D3 bits..
    var data =[82, 62, 10, 32];
    // and `element[0]` for the the directives containing DOM element
    var color = d3.scale.category10();
    var el = element[0];
    var width = el.clientWidth;
    var height = el.clientWidth;
    var min = Math.min(width, height);
    var pie = d3.layout.pie().sort(null);
    var arc = d3.svg.arc()
      .outerRadius(min / 2 * 0.9)
      .innerRadius(min / 2 * 0.5);
    var svg = d3.select(el).append('svg')
      .attr({width: width, height: height})
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // add the <path>s for each arc slice
    svg.selectAll('path').data(pie(data))
      .enter().append('path')
        .style('stroke', 'white')
        .attr('d', arc)
        .attr('fill', function(d, i){ return color(i) });
    }

});
