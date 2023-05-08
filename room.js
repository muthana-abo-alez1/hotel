 
 class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum=0,roomNum="",price=0,isBooked=false){
        this.floorNum = floorNum;
         this.roomNum = roomNum;
        this.price = price;
         this.#isBooked = isBooked;
    }
    toString(){
        return (`Room ${this.roomNum} on floor ${this.floorNum}, priced at ${this.price}, is ${
            this.#isBooked ? "booked" : "available"
          }`)
    }

    book(){
        this.#isBooked = true;
    }

    isBooked(){
        if(this.#isBooked)
            console.log("room is booked");
        else
            console.log("The room is not booked");
    }
}
export default Room;