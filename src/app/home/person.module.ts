export class Person {
    get redoublant(): boolean {
        return this.Redoublant;
    }

    set redoublant(value: boolean) {
        this.Redoublant = value;
    }
    get contact(): Contact {
        return this.Contact;
    }
    get address(): Address {
        return this.Address;
    }
    get civility(): string {
        return this.Civility;
    }

    set civility(value: string) {
        this.Civility = value;
    }
    get birthDate(): Date {
        return this.BirthDate;
    }

    set birthDate(value: Date) {
        this.BirthDate = value;
    }
    get secondName(): string {
        return this.SecondName;
    }

    set secondName(value: string) {
        this.SecondName = value;
    }
    get name(): string {
        return this.Name;
    }

    set name(value: string) {
        this.Name = value;
    }
    private Name: string;
    private SecondName: string;
    private BirthDate: Date;
    private Civility: string;
    private Address: Address;
    private Contact: Contact;
    private Redoublant: boolean;
    constructor() {
        this.Address = new Address();
        this.Contact = new Contact();
    }
}

export class Address {
    route: string;
    postalCode: string;
    village: string;
}

export class Contact {
    phone: string;
    email: string;
}
