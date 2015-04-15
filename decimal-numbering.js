var alpha = require('lower-alpha');

module.exports = function(numbering) {
  return numbering
    .map(function(component) {
      var element = component.element;
      var series = component.series;
      return series.of > 1 ?
        alpha(series.number) + '-' + element.number :
        element.number;
    })
    .join('.')
    .toUpperCase();
};

module.exports.version = '1.0.0';
