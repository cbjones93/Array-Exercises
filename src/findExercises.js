import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export const getStudentById = (id) =>{
    return students.find(student => student.id === id)
}
console.log(getStudentById(1))
// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) =>{
    return instructors.find(instructor => instructor.id === id)
}
console.log(getInstructorById(1))
// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) =>{
    return students.find(student => student.lastName.toLowerCase() === lastName.toLowerCase())
}
console.log(getStudentByLastName("SmIth"))
// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) =>{
    return students.find(student => `${student.firstName} ${student.lastName}`.toLowerCase() ===
    fullName.toLowerCase()
)}
console.log(getStudentByName("Summer SMITH"))
// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) =>{
    return instructors.find(instructorTaco => instructorTaco.id ===
        (students.find(studentTaco => studentTaco.id === studentId).instructorId))}
            
console.log(getInstructorOfStudent(4))
// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
export const getStudentWithMostLangs = () =>{
   let MostLanguages = [];
   let Length = [0]
   students.forEach(student =>{
       MostLanguages.push(student.languages.length)
   })
   MostLanguages.forEach(languageTaco =>{
       if(languageTaco > Length[0]){
           Length.pop();
           Length.push(languageTaco)
       }
   })
   return students.find(student => student.languages.length === Length[0])
}
console.log(getStudentWithMostLangs())