const EventEmitter = require('events')

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
    console.log('Event 1 is emitted')
})

myEmitter.on("newSale", () => {
    console.log('Event 2 is also emitted')
})

myEmitter.on("newSale", stock => {
    console.log(`There is only ${stock} products left`)
})

myEmitter.emit("newSale")
myEmitter.emit("newSale", 9)