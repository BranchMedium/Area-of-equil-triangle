let aSide // the first side of a triangle
let bSide // the second side of a triangle
let cSide // the third and last side of a triangle
let s // sum of the three sides divided by 2
let area1 // calc for area2
let area2 // area of a triangle
//***********************************************
function calc (aSide, bSide, cSide) {
    aSide = Number(document.getElementById("a-side").value);
    bSide = Number(document.getElementById("b-side").value);
    cSide = Number(document.getElementById("c-side").value);
    s = (aSide + bSide + cSide) / 2;
    area1 = s * (s - aSide) * (s - bSide) * (s - cSide);
    area2 = Math.sqrt(area1);
    document.getElementById("result").innerHTML = Math.round(area2); 
}