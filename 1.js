/**

возвращает площадь треугольника исходя из длин его сторон

@param {float} a - длинна первой стороны.
@param {float} b - длинна второй стороны.
@param {float} c - длинна третьей стороны.

*/

function sss(a = 3, b = 4, c = 5){
  let p = (a+b+c)/2;
  return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

console.log(sss(3,4,5));
