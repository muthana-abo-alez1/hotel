import Room from './room.js';
 class SleepingRoom extends Room{
    perosnCapacity;
    constructor(floorNum = 0, roomNum = "", price = 0, isBooked = true, personCapacity = 1) {
        super(floorNum, roomNum, price, isBooked);
        this.personCapacity = personCapacity;
      }

      toString(){
        return `${super.toString()}, has a capacity of ${this.personCapacity} person(s)`;
      }
}
export default SleepingRoom;