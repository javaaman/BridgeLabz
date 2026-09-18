 const readLine = require('readline');
 const rl = readLine.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
    const Present = 1;
    const Absent = 0;
    const No_Work = 0;
    const Part_Time =4;
    const Full_Time = 8;
    const wagePerHour = 20;
 rl.question('Enter Employee Name : ', (employeeName) => {


    const  attendence = Math.floor(Math.random() * 2);

      if(attendence === Absent) {
        console.log(`The ${employeeName} is not present.`);
        console.log(`Employee Daily Wage is : 0`);
        rl.close();
        return;
      }

    console.log(`The ${employeeName} is present.`);

    const empoyeeType = Math.floor(Math.random() * 3);
    let workingHours = 0;


    switch (empoyeeType) {
      case No_Work:
          workingHours = 0;
          break;
      case Part_Time:
          workingHours = 4;
          break;

      case Full_Time:
          workingHours = 8;
          break;
    }

    const dailyWage = workingHours * wagePerHour;
    console.log(`Employee Working Hours is : ${workingHours}`); 
    console.log(`Employee Daily Wage is : ${dailyWage}`);

  rl.close();
  }); 


 


