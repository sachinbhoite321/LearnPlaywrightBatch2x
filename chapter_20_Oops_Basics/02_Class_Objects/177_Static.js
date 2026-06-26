class Student {


    constructor(student_name, age, phone) {
        this.student_name = student_name;
        this.age = age;
        this.phone = phone;
    }
    static mentor_name = "sachinB";
    static name = "Playwright2x";

    static display() {
        console.log("Im common ins f(n)");
    }
}

const s1 = new Student("Sachin", 31, "9825371832");
const s2 = new Student("Shital", 29, "7353672737");

console.log(s1.mentor_name);
console.log(Student.mentor_name);
Student.display();