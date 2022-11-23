class Clock {
    constructor() {
        let time =  new Date();
        this.hours = time.getHours();
        this.seconds = time.getSeconds();
        this.minutes = time.getMinutes();

        const boundTick = this._tick.bind(this) // function-style
        setInterval(boundTick, 1000);
    }

    printTime() {
        let outputTime = `${this.hours}: ${this.minutes}: ${this.seconds}`;
        console.log(outputTime)
    }

    _tick() {
        this.incrementSeconds();
        this.printTime();
    }

    incrementSeconds() {
        this.seconds++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.incrementMinutes();
        }
    }

    incrementMinutes() {
        this.minutes++;

        if (this.minutes === 60) {
            this.minutes = 0;
            this.incrementHours();
        }
    }

    incrementHours() {
        this.hours++;

        if (this.hours === 24) {
            this.hours = 0;
        }
    }
    
}

// const clock = new Clock();

// readline.createInterface()

// const addNumbers = () => { 

// }




Function.prototype.myBind = function(ctx) {
    return () => {this.apply(ctx)}
}

// Function.prototype.myBind = function(ctx) {
//     let that = this;

//     return function() {
//         return that.apply(ctx);
//     }

// }








