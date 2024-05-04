// Function to calculate the sum of array elements greater than or equal to 20
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 20)
            sum += arr[i];
    }
    return sum;
}

// Testing the sum function
let num = [22, 33, 11, 7];
console.log("Question 1 " + sum(num));

// Function to find and log array elements with length >= 5 and containing 'a'
function findNewArray(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5 && str[i].includes('a')) {
            console.log(str[i]);
        }
    }
}

// Testing the findNewArray function
let str = ["peteraa", "hhsdjsaa", "llllll", "ssss"];
findNewArray(str);

// Function to concatenate arrays
const concat = (str, ...arrays) => {
    let result = [str];
    
    for (let arr of arrays) {
        result = result.concat(arr);
    }
    
    return result;
};

// Testing the concat function
console.log("Question 3", concat('hi', [1, 2, 3], ['Hello', 'world']));

// Students array and function to compute average grades for 'cs303' students
const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

// Function to compute average grades for students enrolled in 'cs303'
const computeAverageGrades = (students) => {
    const cs303Students = students.filter(student => student.courses.includes('cs303'));
    
    const averageGrades = cs303Students.reduce((acc, student) => {
        let average = student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
        acc[student.name] = average;
        return acc;
    }, {});
    
    return averageGrades;
};

// Testing the computeAverageGrades function
console.log(computeAverageGrades(students));
