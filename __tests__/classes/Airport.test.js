const Airport = require('../../classes/Airport.js');
const Plane = require('../../classes/Plane.js');

describe('Airport Class', () => {
    const airport = new Airport("London Heathrow", "LHR");
    const plane = new Plane("British Airways", "London", "New York")

    it("initializes the Airport Class", () => {
        expect(airport.name).toBe("London Heathrow");
        expect(airport.airportCode).toBe("LHR");
    })

    it("returns the planes array with getPlanes method", () => {
        expect(airport.getPlanes()).toEqual([]);
    })

    it("adds to the planes array with addPlane method", () => {
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
        expect(airport.getPlanes()[0]).toBeInstanceOf(Plane)
    })
})