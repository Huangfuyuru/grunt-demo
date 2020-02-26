/*global module:true*/
function sum(x,y){
  if((typeof x)==='number'&&(typeof y)==='number')
    return x+y;
  else
    return NaN;
}

module.exports = sum;
