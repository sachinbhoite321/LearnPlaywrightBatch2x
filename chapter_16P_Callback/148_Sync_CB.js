let testResult = ["Pass", "Fail", "Skip", "Pass"];

testResult.forEach(function (result, index) {

    console.log("Test Result: " + index + " ==> " + result)
})


//This is the perfect example of the synchronus
//The anonomus function will take the item 1 by 1
//It will take the index 1 by 1.
//It will take result 1 by 1