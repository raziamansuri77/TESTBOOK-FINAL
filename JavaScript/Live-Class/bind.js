const classA = {
  studentName: function () {
    console.log("abc");
  },
};

const classB = {};
let studentName = classA.studentName.bind(classB);
studentName();
console.log(classB.studentName);
