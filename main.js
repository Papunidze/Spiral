window.onload = function (){
    document.getElementById('btn').addEventListener('click',Creat)
    let table=document.getElementById('table')
    let saveValue;
    function Creat (){
    table.innerHTML='';
    saveValue= parseInt(document.getElementById("input").value)
    let tableWidth=saveValue*2.2;
    let length = saveValue;
    let array = [];
    let counter = 1;
    let startRow = 0;
    let endRow = length - 1;
    let startColumn = 0;
    let endColumn = length - 1;
    for (let i = 0; i < length; i++) {
      array.push([]);
    }
    while (startColumn <= endColumn && startRow <= endRow) {
      for (let i = startColumn; i <= endColumn; i++) {
        array[startRow][i] = counter;
        counter++;
      }
      startRow++;
      for (let i = startRow; i <= endRow; i++) {
        array[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
      for (let i = endColumn; i >= startColumn; i--) {
        array[endRow][i] = counter;
        counter++;
        
      }
      endRow--;
      for (let i = endRow; i >= startRow; i--) {
        array[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    for (let i=0; i<saveValue; i++){
        for (let j=0; j<saveValue; j++){
    let li=document.createElement('li')
    li.setAttribute('class','cube')
    li.setAttribute('id',array[i][j])
    table.appendChild(li)
    table.style.width=tableWidth+"em";
}
}
console.log(array)
function generateColors (saturation, lightness) {
  let colors = []
  let amount;
  if (saveValue<10){
    amount=30
  }
  if (saveValue<=20 && saveValue>=10){
  amount=90
  }
  else {
    amount=180;
  }
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < saveValue*saveValue+1; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%)`)
  }
  return colors
}
  let colors = generateColors(50,50);
  for (let i = 1; i <= length * length; i++) {
        document.getElementById(`${i}`).style.backgroundColor = `${colors[i]}`;
  }

}
}
