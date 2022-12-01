export abstract class Car {
    abstract getNumberofSeats():number;
}

export class Tesla extends Car{
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberofSeats(){
        return this.numberOfSeats;
    }
}

export class Audi extends Car{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberofSeats(){
        return this.numberOfSeats;
    }
}

export class Toyota extends Car{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberofSeats(){
        return this.numberOfSeats;
    }
}

export class Honda extends Car{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberofSeats(){
        return this.numberOfSeats;
    }
}