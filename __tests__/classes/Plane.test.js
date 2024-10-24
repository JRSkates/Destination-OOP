const Plane = require('../../classes/Plane.js')
const Person = require('../../classes/Person.js')

describe("Plane Class", () => {
    const plane = new Plane("British Airways", "London", "New York")
    const person = new Person("Jack", "New York");

    it("initializes Plane Class", () => {
        expect(plane.company).toBe("British Airways")
        expect(plane.origin).toBe("London")
        expect(plane.destination).toBe("New York")
    })

    it("returns passengers array with getPassengers", () => {
        expect(plane.getPassengers()).toEqual([])
    })

    it("adds a passenger with addPassengers", () => {
        plane.addPassenger(person)
        expect(plane.getPassengers()).toEqual([person])
        expect(plane.getPassengers()[0]).toBeInstanceOf(Person)
    })
})