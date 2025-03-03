import { User, TransformedData, Gender } from './enumAndInterface';

export const transformData = (users: User[]): TransformedData => {
    return users.reduce((acc: TransformedData, user: User) => {
        const department = user.company.department;
        if (!acc[department]) {
            acc[department] = {
                male: 0,
                female: 0,
                ageRange: `${user.age}-${user.age}`,
                hair: {},
                addressUser: {},
            };
        }
        if (user.gender === Gender.MALE) {
            acc[department].male++;
        } else {
            acc[department].female++;
        }

        const ageRange = acc[department].ageRange.split('-').map(Number);
        if (user.age < ageRange[0]) {
            ageRange[0] = user.age;
        } else if (user.age > ageRange[1]) {
            ageRange[1] = user.age;
        }
        acc[department].ageRange = `${ageRange[0]}-${ageRange[1]}`;

        const hairColor = user.hair.color;
        if (!acc[department].hair[hairColor]) {
            acc[department].hair[hairColor] = 0;
        }
        acc[department].hair[hairColor]++;

        acc[department].addressUser[`${user.firstName}${user.lastName}`] = user.address.postalCode;

        return acc;
    }, {})
}