class Human {
    constructor (name, sex) {
        this.name = name
        this.sex = sex
    }
}

class Flat {
    citizensArray = [];

    // чесно, просто по приколу поставив масив сюди, бо спочатку пробував в метод його засунути
    // і я не знаю чи так правильно писати, але мені викидало помилку, що я не можу використовувати let i const
    // але ніби працює

    citizens (objectHuman) {
        this.citizensArray.push(objectHuman)
        console.log(`People in this flat that do not aim with a gun: ${this.citizensArray.length}`)
    }
}

class House {
    flatArray = [];

    constructor (maxFlat) {
        this.maxFlat = maxFlat
    }

    addFlat (flat) {
        if (this.flatArray.length >= this.maxFlat) {
            console.log(`You can not add more than ${this.maxFlat} flat(s) to this house`)
        } else {
            
            this.flatArray.push(flat);
            console.log(`Number of flats: ${this.flatArray.length}`)
        }
    };
}

const firstHuman = new Human('Roland', 'male');
const secondHuman = new Human('Eddie', 'male');
const thirdHuman = new Human('Susannah', 'female');
const fourthHuman =new Human('Jake', 'male')

let firstFlat = new Flat;
firstFlat.citizens(firstHuman)
firstFlat.citizens(fourthHuman)
const secondFlat = new Flat;
secondFlat.citizens(secondHuman)
const thirdFlat = new Flat;
thirdFlat.citizens(thirdHuman)


const firstHouse = new House(2)
firstHouse.addFlat(firstFlat)
firstHouse.addFlat(secondFlat)
firstHouse.addFlat(thirdFlat)