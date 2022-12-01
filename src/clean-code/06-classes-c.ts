(() => {

    //Aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor(
            { name, gender, birthdate }: PersonProps
        ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string,
        role: string,
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({
            email,
            role,
        }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'jorge210588@hotmail.com',
        role: 'admin',
        name: 'Jorge Rivera',
        gender: 'M',
        birthdate: new Date('1988-05-21')
    });

    //const newUser = new User()

    //const newPerson = new Person('Jorge', 'M', new Date('1988-05-21'));
    console.log({ userSettings });
})();