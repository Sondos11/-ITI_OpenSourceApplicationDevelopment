var myMod = require("./task1_module");
let myClass = myMod.myClass;

let passenger1 = new myClass();
passenger1.AddTicket(1, 25, 3, "cairo", "paris", "20/12/2023");
passenger1.AddTicket(2, 28, 1, "madrid", "dubai", "5/2/2023");
passenger1.AddTicket(3, 5, 8, "makka", "cairo", "24/4/2023");
// passenger1.DisplayTickets();
// passenger1.getTicket(3);
// passenger1.updateTicket(3).TravellingDate = "8/4/2023";
// passenger1.getTicket(3);

let passenger2 = new myClass();
passenger2.AddTicket(1, 11, 6, "burg elarab", "los anglous", "1/12/2022");
passenger2.AddTicket(2, 9, 2, "geddah", "cairo", "11/7/2022");
// passenger2.DisplayTickets();
// passenger2.getTicket(1);
// passenger2.updateTicket(2).SeatNum = 55;
// passenger2.getTicket(1);
