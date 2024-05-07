function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height/100
  let BMI = weight/(height*height)
  window.alert(BMI) 
  if (BMI <= 24.9) {
    alert('You are underweight')
  } else if (BMI >= 25 && BMI <= 29.9) {
    alert('You are healthy')
  } else{
    alert('You are overweight')
  }
}


  