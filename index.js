const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
for (const c in collection) {
        alert(collection[c]);
      }
      return collection;
    },

    map: function(collection, callback) {
let array = [];
      for (const c in collection) {
        array.push(callback(collection[c]));
      }
      return array;
    },

    reduce: function(collection, callback, acc) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
