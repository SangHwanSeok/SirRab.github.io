console.log("js file load");

function add_column(){
  let ColumnNumber = 1;
  const coldiv = document.getElementById("coldiv"+ColumnNumber);
  ++ColumnNumber;
  const newdiv = document.createElement('div');
  newdiv.setAttribute("id", "div" + String(ColumnNumber));
  const newinput = document.createElement('input');
  newinput.setAttribute("type","text");
  newinput.setAttribute("name", "input" + String(ColumnNumber));
  newdiv.appendChild(newinput);
  coldiv.appendChild(newdiv);
}
