const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

describe("Person Class", () => {
    const person = new Person("Jack", "New York");
    const bag = new Bag(45, 1);
    it("created a Person instance", () => {
        expect(person.name).toBe("Jack");
        expect(person.destination).toBe("New York");
    })

    it("returns the bag property with getBags", () => {
        expect(person.getBags()).toEqual([]);
    })

    it("adds to the bag property with addBag method", () => {
        person.addBag(bag);
        expect(person.getBags()).toEqual([bag]);
    })
})

