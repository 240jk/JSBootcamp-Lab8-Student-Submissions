let submissions = [{ name: "Jane", score: 95, date: "2020-01-24", passed: true},
                    { name: "Joe", score: 77, date: "2018-05-14", passed: true},
                    { name: "Jack", score: 59, date: "2019-07-05", passed: false},
                    { name: "Jill", score: 88, date: "2020-04-22", passed: true},
]

function addSubmission(array, newName, newScore, newDate){
    let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    }
    newSubmission.score >= 60 ? newSubmission.passed = true : newSubmission.passed = false;

    array.push(newSubmission);
    console.log(array);
 }

//addSubmission(submissions, "Sally", 40, "2020-01-01");

//deleteSubmission by index
function deleteSubmissionByIndex (array, index){
   array.splice(index, 1);
   console.log(array);
}

//deleteSubmissionByIndex(submissions, 2)

//deleteSubmission by name
function deleteSubmissionByName (array, name){
   array.splice(name, 1);
   console.log(array);
}

//deleteSubmissionByName(submissions, "Jack")



//editSubmission

function editSubmissionScore(array, index, score){



}


//findSubmissionByName

function findSubmissionByName(){
   array.findIndex()

}


//findLowestScore

function findLowestScore(array){
   array.reduce(function(prev, curr){
      return prev.score < curr.score ? prev : curr;
   })
}

findLowestScore(submissions)


//findAverageScore

// function findAverageScore(array){
//    for()

   


// }


//filterPassing

function filterPassing(){


}


//filter90AndAbove

function filter90AndAbove(array, index, score){
   for (var i=0; i < array.length; i++) {
      if (index == true) {
        if (array[i] > score){
          return array[i-1] || 0;
        }
      } else {
        if (array[i] >= score) {
          return array[i];
        }
      }
    }
}


