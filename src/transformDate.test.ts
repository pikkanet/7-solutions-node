import { transformData } from './transformData';
import { User } from './enumAndInterface'

describe('transformData', () => {
    it('should transform users data correctly', () => {
        const users: User[] = [
            {
                "firstName": "Emily",
                "lastName": "Johnson",
                "age": 28,
                "gender": "female",
                "hair": {
                    "color": "Brown",
                },
                "address": {
                    "postalCode": "29112",
                },
                "company": {
                    "department": "Engineering",
                }
            },
            {
                "firstName": "Alexander",
                "lastName": "Jones",
                "age": 38,
                "gender": "male",
                "hair": {
                    "color": "White",
                },
                "address": {
                    "postalCode": "86684"
                },

                "company": {
                    "department": "Engineering",

                }
            }
        ];

        const expectedOutput = {
            Engineering: {
                male: 1,
                female: 1,
                ageRange: '28-38',
                hair: { Brown: 1, White: 1 },
                addressUser: { EmilyJohnson: '29112', AlexanderJones: '86684' }
            }
        };

        const result = transformData(users);

        expect(result).toEqual(expectedOutput);
    });

    it('should transform users data correctly with 2 depardment', () => {
        const users: User[] = [
            {
                "firstName": "Emily",
                "lastName": "Johnson",
                "age": 28,
                "gender": "female",
                "hair": {
                    "color": "Brown",
                },
                "address": {
                    "postalCode": "29112",
                },
                "company": {
                    "department": "Engineering",
                }
            },
            {
                "firstName": "Ava",
                "lastName": "Taylor",
                "age": 27,
                "gender": "female",
                "hair": {
                    "color": "Red"
                },
                "address": {
                    "postalCode": "24771",
                },
                "company": {
                    "department": "Marketing",
                }
            },
        ];

        const expectedOutput = {
            Engineering: {
                male: 0,
                female: 1,
                ageRange: '28-28',
                hair: { Brown: 1 },
                addressUser: { EmilyJohnson: '29112' }
            },
            Marketing: {
                male: 0,
                female: 1,
                ageRange: '27-27',
                hair: { Red: 1 },
                addressUser: { AvaTaylor: '24771' }
            }
        };

        const result = transformData(users);
        expect(result).toEqual(expectedOutput);
    });

});