export interface User {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    hair: { color: string };
    company: { department: string };
    address: { postalCode: string };
}

export interface TransformedData {
    [department: string]: {
        male: number;
        female: number;
        ageRange: string;
        hair: { [color: string]: number };
        addressUser: { [name: string]: string };
    };
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}