function getStudents(firstStudent,secondStudent,thirdStudent){
    console.log("Student 1: " + firstStudent);
    console.log("Student 2: " + secondStudent);
    console.log("Student 3: " + thirdStudent);
}

//Doesn't matter how many student you have input in the function
//it will consider only the first three
getStudents(...["Ming Chun","Ann","Meghan","Ali"]);