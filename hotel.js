import Room from './room.js';
 class Hotel {
   Address;
    NumberOfRoom;
    #minFloor;
    #maxFloor;
    rooms;
    constructor(Address="",NumberOfRoom=0,minFloor=0,maxFloor=0,Rooms){
        this.Address = Address;
        this.NumberOfRoom=NumberOfRoom;
        this.#minFloor=minFloor;
        this.#maxFloor=maxFloor;
        this.rooms=Rooms;
    }
    getMinFloor() {
        return this.#minFloor;
      }
      getMaxFloor() {
        return this.#maxFloor;
      }
      printHotel() {
        console.log(`Address: ${this.Address}`);
        console.log(`Number of Rooms: ${this.NumberOfRoom}`);
        console.log(`Minimum Floor: ${this.getMinFloor()}`);
        console.log(`Maximum Floor: ${this.getMaxFloor()}`);
        for (const room of this.rooms) {
            console.log("- " + room.toString());
          }
    }
    listBookedRoom(){
        console.log("Booked Rooms:");
        for (const room of this.rooms) {
          if (room.isBooked()) {
            console.log("- " + room.roomNum);
          }
        }
    }
    printAdvertisemen(){
        console.log("Welcome to our hotel!");
        console.log(`Address: ${this.Address}`);
        console.log("Room Rates:");
        for (const room of this.rooms) {
          console.log(`- ${room.roomNum}: $${room.price}`);
        }  
    }
}
export default Hotel;