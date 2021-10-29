console.log("js file load");


  //숫자 input id 숫자
  let ColumnNumber = 1;
function add_column(){
  //숫자 증가
  ++ColumnNumber;
  
  //class="coldiv" div 생성
  const newdiv = document.createElement('div');
  newdiv.setAttribute("class", "coldiv");
  
  //type="text" id="col" input 생성
  const newinput = document.createElement('input');
  newinput.setAttribute("type","text");
  newinput.setAttribute("id", "col" + String(ColumnNumber));

  //input을 div에 붙임
  newdiv.appendChild(newinput);
  //class="Head_Div"를 가져옴
  const HeadDiv = document.getElementById("Head_Div");
  //div를 Head_Div에 붙임
  HeadDiv.appendChild(newdiv);

  //input type="button" id="removebutton" onclick="remove_column()" 생성
  const removebutton = document.createElement('input');
  removebutton.setAttribute("type","button");
  removebutton.setAttribute("id","removebutton");
  removebutton.setAttribute("onclick","remove_column(this.parentNode.id)");
  
  //removebutton을 input 부모에 붙임
  newinput.parentNode.appendChild(removebutton);
}

function remove_column(remove){
  document.getElementById(remove).removeChild("div");
}