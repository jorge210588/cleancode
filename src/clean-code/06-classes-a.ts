(() => {

    //No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    // class Person {
    //     public name: string;
    //     public gender:Gender;
    //     public birthdate:Date;

    //     constructor(name: string, gender: Gender, birthdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate:Date
        ){}
    }

    class User extends Person{
        public lastAccess: Date;

        constructor(
            public email:string,
            public role:string,
            name:string,
            gender:Gender,
            birthdate:Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials () {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory:string,
            public lastOpenFolder:string,
            email:string,
            role:string,
            name:string,
            gender:Gender,
            birthdate:Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'jorge210588@hotmail.com',
        'admin',
        'Jorge Rivera',
        'M',
        new Date('1988-05-21')
    )

    //const newUser = new User()

    //const newPerson = new Person('Jorge', 'M', new Date('1988-05-21'));
    console.log({userSettings});
})();