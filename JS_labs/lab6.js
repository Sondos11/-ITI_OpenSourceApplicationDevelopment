
class Person{
    constructor(fullName, money, sleepMood, healthRate){
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }
    sleep = function(hours){
                if(hours == 7){
                    this.sleepMood = "Happy";   
                }else if(hours < 7){
                  this.sleepMood = "Tired";
                }else if(hours > 7){
                  this.sleepMood = "Lazy";
                }
                return this.sleepMood; 
    }
    eat =  function(meals){
                if(meals == 3){
                this.healthRate = 100;
                }else if(meals == 2 ){
                this.healthRate =75;
                }else if(meals == 1){
                this.healthRate = 50;
                }
                return this.healthRate;
     }
     buy = function(items){
                  for (let i = 0; i < items; i++) {
                       this.money -=10;
                  }
                  return this.money;
                     
    }
}
// let person = new Person("nehad osman ",10000,"Happy",50);

// //console.log(person);
// person.sleep(7);
// person.eat(3);
// person.buy(5);
// console.log(person);

class Employee extends Person {
    #salary;
    #healthRate;
    constructor(fullName, money, sleepMood, healthRate, id, email, workMood, salary, isManager) {
        super(fullName, money, sleepMood, healthRate)
        this.id = id;
        this.email = email;
        this.workMood = workMood;
        this.#salary = salary;
        this.#healthRate = healthRate;
        this.isManager = isManager;
        // this.isManager = function(manager){
        //     if( manager == 1){
        //         return 1;
        //     }else{
        //         return 0;
        //     }
        //}
    }
  
    work = function(hours){
        if(hours == 8){
            this.workMood = "Happy";   
        }else if(hours > 8){
          this.workMood = "Tired";
        }else if(hours < 8){
          this.workMood = "Lazy";
        }
        return this.workMood; 
    }

    setchangeSalary(newSalary){
        if (newSalary >= 1000){
            this.#salary = newSalary;
        }
        else
        console.log("this is very low Don't change it");
    }

    getsalary() {
             return this.#salary;
    }

    setHealthRate(healthRate){
        if (healthRate > 0 && healthRate < 100  ){
            this.#healthRate = healthRate;
        }
        else
        console.log("isn't correct HEALTH RATE");
    }

    getHealthRate() {
             return this.#healthRate;
    }

    getIsManager(){
        return this.isManager;
    }
}

// let emp = new Employee("nehad osman",222,"Happy",50, "111", "nehad@gmail", "Happy", 10000, 0);
// console.log(emp);
// emp.sleep(7);
// emp.eat(1);
// emp.buy(5);
// emp.work(2)

// emp.setchangeSalary(2000);
// console.log(emp.getsalary());
// emp.setchangeSalary(30000);
// console.log(emp.getsalary());

// emp.setHealthRate(10);
// console.log(emp.getHealthRate());
// emp.setHealthRate(20);
// console.log(emp.getHealthRate());

// emp.healthRate = 30; // not change anything because attribute is private
// console.log(emp.getHealthRate());

// console.log(emp);

//////////////////////////////////////////////////////////////
class Office{
    constructor(name, employees){
        this.name = name;
        this.employees = employees;
    }

    getAllEmployees(){
        return this.employees;
    }

    getEmployee(empID){
        console.log(this.employees.isManager);
        var employee = 0;
        for(let i=0; i< this.employees.length; i++){
            if(this.employees[i].id == empID){
                employee = this.employees[i];
                if(this.employees.isManager == 1){
                    employee  = this.employees[i].fullName + " " + this.employees[i].healthRate;
                }
            }
        }
        return employee;
    }


    hire = function(Employee){
        console.log("this employee is hired");
        this.employees.push(Employee);
        return this.employees;      
    }

    fire = function(empID){
        var employees = 0;
        this.employees.forEach(element => {
                if(element.id == empID ){
                    console.log(element)
                    var index = this.employees.indexOf(element);
                    this.employees.splice(index,1);
            }
        });
        console.log("this employee is fired");
        return this.employees;
    }


}

let emp1 = new Employee("nehad", 11, "Happy", 50, 1, "nehad@gmail", "Happy", 10000,1);
let emp2 = new Employee("osman",22,"Happy",50, 2, "nehad@gmail", "Happy", 20000,1);
let emp3 = new Employee("shady",33,"Happy",50, 3, "nehad@gmail", "Happy", 33333333333333333,1);
const current_employees = [];
var Office1 = new Office("data", current_employees);
Office1.hire(emp1);
Office1.hire(emp2);
Office1.hire(emp3);
console.log(Office1.getAllEmployees());
Office1.fire(2);
console.log(Office1.getAllEmployees());

//console.log(Office1.getEmployee(2));
var stop = false;
while(!stop){
    var option = prompt("enter the number of function you want:\n 1-Add new employee \n 2-Delete employee \n 3-Get all current employees \n 4-Get employee");
    if(option =='1'){
        let a = prompt("Enter your fullName");
        let b = prompt("Enter your money");
        let c = prompt("Enter your sleepMood : happy or tired or lazy");
        let d = prompt("Enter your healthRate :100 or 75 or 50")
        let e = prompt("Enter your ID");
        let f = prompt("Enter your Email");
        let g = prompt("Enter your workMood : happy or tired or lazy");
        let h = prompt("Enter your salary");
        let i = prompt("if you are manger enter 1 else enter  0 ");
        let newEmp = new Employee(a,b,c,d,e,f,g,h,i);
        Office1.hire(newEmp);
        alert("Hirring new employee done successfully");
        console.log(Office1.getAllEmployees());
    }
    else if (option == "2"){
        let remove = Number(prompt("Enter ID of Employee : "));
        Office1.fire(remove);
        alert("Done");
        console.log(Office1.getAllEmployees());
    }
    else if(option == "3"){
        let  allEmp  = Office1.getAllEmployees();
        for (let i = 0; i < allEmp.length; i++) {
        alert("Employee number : "+(i+1)+"\nName: "+allEmp[i].fullName+"\nSleep Mood: "+allEmp[i].sleepMood+"\nHealth Rate: "+allEmp[i].getHealthRate()+"\nID: "
        +allEmp[i].id+"\nemail: "+allEmp[i].email+"\nWork Mood: "+allEmp[i].workMood+"\nsalary:"+allEmp[i].getsalary()+"\nIs Manger: "+allEmp[i].isManager+"\n");
        }
    }
    else if(option == "4"){
        let id = Number(prompt("enter the ID of employee : "));
        let  x = Office1.getEmployee(id); 
    alert("Employee information : \nName: "+x.fullName+"\nSleep Mood: "+x.sleepMood+"\nHealth Rate: "+
    x.getHealthRate()+"\nID: "+x.id+"\nemail: "+x.email+"\nWork Mood: "+x.workMood+"\nsalary:"+x.getsalary()+"\nIs Manger: "+x.isManager+"\n");
    }
    var answer = prompt("do you want to exit (yes , no)");
    if(answer == "yes")
    {
        stop = true;
    }

}

