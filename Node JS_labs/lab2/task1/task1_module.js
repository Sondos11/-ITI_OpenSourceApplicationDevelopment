class myClass {
  Tickets = [];
  AddTicket(tickId, SeatNum, FlightNum, Departure, Arrival, TravellingDate) {
    let ticket = {
      tickId,
      SeatNum,
      FlightNum,
      Departure,
      Arrival,
      TravellingDate,
    };
    this.Tickets.push(ticket);
  }
  DisplayTickets() {
    this.Tickets.forEach((element) => console.log(element));
  }
  getTicket(tickId) {
    for (let i = 0; i < this.Tickets.length; i++) {
      if (this.Tickets[i].tickId == tickId) {
        console.log(this.Tickets[i]);
      }
    }
  }
  updateTicket(tickId) {
    var upd_ticket = this.Tickets.findIndex((obj) => obj.tickId == tickId);
    return this.Tickets[upd_ticket];
  }
}

module.exports = {
  myClass,
};
