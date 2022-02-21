// global array
 
let arr = [];

  // empty DOM elements on load
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

// on enter key press enter data in table
document.onkeypress = function (e) {
  e = e || window.event;
  var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
  if (charCode == 13) {
      // calling a submit function
      myFunction();
     }
     console.log(charCode);
 };
// Add button functionality
function myFunction() {
  let tBody = document.getElementById("tableBody");
  let tableRow = document.createElement("tr");
  let tableData = document.createElement("td");
  let tableData2 = document.createElement("td");
  let tableData3 = document.createElement("td");
  // append data to table
  tableRow.appendChild(tableData);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  tBody.appendChild(tableRow);
  // getting data from user
  tableData.innerHTML = document.getElementById("input1").value;
  tableData2.innerHTML = document.getElementById("input2").value;
  tableData3.innerHTML = document.getElementById("input3").value;

  // after getting the input data, we changed the focus to the first input element
  document.getElementById("input1").focus();

  // creating variable of input data
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  // create object to store data
  let obj = {
    class: input1,
    marks: input2,
    grade: input3
  };
  // push the data to array
  arr.push(obj);
  console.log("array of Table Data" , arr);

  // empty DOM elements
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

  // set local storage data
  localStorage.setItem("arr", JSON.stringify(arr));
}
// globally getting data from local storage
  let getData = localStorage.getItem("arr");
  if(getData !== null){
    arr = JSON.parse(getData);
  }
// local storage data on load
  for(let i = 0; i < arr.length; i++){
    let tBody = document.getElementById("tableBody");
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    // append data to table
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tBody.appendChild(tableRow);
    // getting data from user
    tableData.innerHTML = arr[i].class;
    tableData2.innerHTML = arr[i].marks;
    tableData3.innerHTML = arr[i].grade;
  }
// reset button functionality
function ResetFunction() {
  let reset = document.getElementById("tableBody").innerHTML = "";
  console.log("Table Data is empty", reset);
  // delete array data from local storage
  localStorage.removeItem("arr");
  arr = [];
}