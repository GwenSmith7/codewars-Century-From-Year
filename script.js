'use strict';

function century(year) {
  // set counter for century
  let century = 0;

  // while year is greater than 0, subtract 100 and century counter goes up 1
  while (year > 0) {
    year -= 100;
    century = century + 1;
  }
  return century;
}

// There's a prettier way of doing this but I'm not quite sure how to refactor it yet
