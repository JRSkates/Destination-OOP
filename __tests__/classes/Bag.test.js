const Bag = require("../../classes/Bag.js");
const Person = require("../../classes/Person.js");

describe("Bag Class", () => {
    const bag = new Bag(45, 1, null);
    const person = new Person("Jack", "New York")

    it("created a bag instance", () => {
        expect(bag.weight).toBe(45)
        expect(bag.id).toBe(1)
    })

    it("checks the owner of the bag", () => {
        expect(bag.getOwner()).toBe(null)
    })

    it("assigns a new owner with assignOwner method", () => {
        expect(bag.getOwner()).toBe(null)
        bag.assignOwner(person)
        expect(bag.getOwner()).toBe(person)
        expect(bag.getOwner()).toBeInstanceOf(Person)
    })
})