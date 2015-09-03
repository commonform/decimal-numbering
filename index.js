var alpha = require('lower-alpha')

module.exports = function(numbering, shortForm) {
  return (
    ( shortForm ? '' : 'Section ' ) +
    numbering
      .map(function(component) {
        var element = component.element
        var series = component.series
        return (
          series.of > 1 ?
            ( alpha(series.number) + '-' + element.number ) :
            element.number ) })
      .join('.')
      .toUpperCase() +
    ( shortForm ? '.' : '' ) ) }
