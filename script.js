document.write("<h1>Hello World</h1>");

function add_column(){
  let ColumnNumber = 1;
  let coldiv = document.getElementById("coldiv"+ColumnNumber);
  ++ColumnNumber;
  let newdiv = document.createElement('div');
  newdiv.setAttribute("id", "div" + String(ColumnNumber));
  let newinput = document.createElement('input');
  newinput.setAttribute("type","text");
  newinput.setAttribute("name", "input" + String(ColumnNumber));
  newdiv.appendChild(newinput);
  coldiv.appendChild(newdiv);
}
