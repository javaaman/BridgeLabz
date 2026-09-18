 const readLine = require('readline');
 const rl = readLine.createInterface({
   input: process.stdin,
   output: process.stdout
 });
  rl.question('Enter Employee Name : ', (employeeName) => {
    const Present = 1;
    let attendence = Math.floor(Math.random() * 2);
    if (attendence === Present) console.log(`The ${employeeName} is present.`);
     else console.log(`The ${employeeName} is not present.`);

  rl.close();
  }); 

