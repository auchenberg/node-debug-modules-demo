let _ = require('underscore')

var array = [1, 2, 3, 4, 5, 6]

var two = _.find(array, (num) => num % 2 == 0)

console.log('two', two)
