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
    const workingDays = 20;
    
    function getEmployeeWage(empoyeeType) {
    switch (empoyeeType) {
      case No_Work:
          return 0;

      case Part_Time:
          return 4;

      case Full_Time:
          return 8;
    }
  }

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
    const workingHours = getEmployeeWage(empoyeeType);
    
    const dailyWage = workingHours * wagePerHour;

    const totalWage = dailyWage * workingDays;
    console.log(`Employee Working Hours is : ${workingHours}`); 
    console.log(`Employee Daily Wage is : ${dailyWage}`);
    console.log(`Employee Total Wage is : ${totalWage}`);

  rl.close();
  }); 


 


