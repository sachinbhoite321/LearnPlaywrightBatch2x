
//You need to create a class with the static and non-static methods as well as variables. It will be a simple class of our Playwright 2x batch. You will be also printing out the students. Create 10 objects of students and print them. Also create a print method. Also sahi baasai. 

class Students {

    constructor(name, rollnu) {

        this.name = name;
        this.rollnu = rollnu;
    }


    static class_name = "Playwright2x";
    static mentor = "Sachin";

    static display() {
        console.log("name is" + this.name);
    }
}

const student1 = new Students("sachin", 1);
const student2 = new Students("B", 2);
const student3 = new Students("c", 3);
const student4 = new Students("d", 4);
const student5 = new Students("e", 5);
const student6 = new Students("f", 6);
const student7 = new Students("g", 7);
const student8 = new Students("h", 8);
const student9 = new Students("i", 9);
const student10 = new Students("j", 10);


console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);



console.log(Students.class_name);
console.log(Students.mentor);





