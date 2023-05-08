import Room from './room.js';
 class RoomWithView extends Room{
    view;
    numberOfbeds;
    constructor(floorNum = 0, roomNum = "", price = 0, isBooked = false, view = "", numberOfBeds = 1) {
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
      }
      toString(){
        return (`${super.toString()}, has ${this.numberOfBeds} bed(s) and a ${this.view} view`);
      }

}
export default RoomWithView;