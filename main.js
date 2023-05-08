import Hotel from './hotel.js';
import Room from './room.js';
import RoomWithView from './roomWithView.js';
import SleepingRoom from './sleepingRoom.js';

const rooms = [
    new Room(1, "101", 50, true),
    new Room(1, "102", 60, false),
    new RoomWithView(2, "201", 70, true,"nice",5),
    new RoomWithView(2, "202", 80, false,"good",5),
    new SleepingRoom(3, "301", 90, false,5),
    new SleepingRoom(3, "302", 100, true,10),
  ];
const hotel = new Hotel("Nablus",100,2,10,rooms);
 hotel.printHotel();
 hotel.listBookedRoom();
 hotel.printAdvertisemen();
