/*  Objects - store dtaa in-depth - composite / complex 
    data type / key-value pairs*/ 

 let course = {
     title: "Learn CSS Grid for free",
     lessons: 16,
     length: "63",
     creator: "Norman Harrison",
     level: 2,
     isFree: true,
     tags: ["html", "css"]
 };
 console.log(course.tags );

 //create first object
 let airBnbCastle = {
     englishCastle: true,
     numberOfRooms: 100,
    swimmingPool: "Yes",
     rooms: [
         "Luxeries",
        25
     ]
 };
 console.log(airBnbCastle.swimmingPool, airBnbCastle["englishCastle"]);