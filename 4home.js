// //tap1
// const students = [
//     { name: "Али", math: 85, city: "Алматы" },
//     { name: "Алина", math: 90 }
//   ];
  
  
//   students.forEach(student => {
//     const { name, math, city = "Қазақстан" } = student; // Дефолт "Қазақстан" мәнін орнату
//     console.log(`Аты: ${name}, Математика бағасы: ${math}, Қала: ${city}`);
//   });





//tap2
const class1 = ["Оқушы1", "Оқушы2", "Оқушы3"];
const class2 = ["Оқушы4", "Оқушы5"];


const mergedClass = ["Директор", ...class1, ...class2, "Мұғалім"];


console.log(mergedClass);