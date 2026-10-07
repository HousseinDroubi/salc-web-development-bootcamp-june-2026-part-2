
// Below weekDays1 starts numbering Mon with 0, Tue with 1... 
enum weekDays1 {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

console.log(weekDays1.Mon); // 0

// Below weekDays2 starts numbering Mon with 4, Tue with 5... 
enum weekDays2 {
  Mon = 4,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

console.log(weekDays2.Mon); // 4

enum weekDays3 {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

console.log(weekDays3.Mon); // Monday