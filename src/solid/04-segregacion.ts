interface Bird {
    eat(): void;
    run(): void;
}

interface AirBird {
    fly(): number;
}

interface WaterBird {
    swim(): void;
}

class Tucan implements Bird, AirBird {
    public fly() { return 100; }
    public eat() { }
    public run() { }

}

class Colibri implements Bird, AirBird {
    public fly() { return 200; }
    public eat() { }
    public run() { }
}

class Avestruz implements Bird {
    public eat() { }
    public run() { }
}

class Pinguino implements Bird, WaterBird {
    public swim() { }
    public eat() { }
    public run() { }

}