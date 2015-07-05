// Counting number of occurences of something in array,
// not the length of it.
Array.prototype.count = function(val){
  var occurrences = 0;
  for (var i = 0; i < this.length; i++) {
    if(this[i] === val)
    occurrences++;
  }
  return occurrences;
};

// Ruby-esque "times" method
// CONTAINS BUG
Number.prototype.times = function(doThis) {
  val = +this;
  while (val > 0 ) {
    doThis();
    val--;
  }
}
