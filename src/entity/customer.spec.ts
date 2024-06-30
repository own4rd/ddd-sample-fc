import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("Throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Jhon");
        }).toThrow("Id is required");
    });

    it("Throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("123", "Jhon");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });


    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("street 1", 123, "338383-33", "São Paulo");
        customer.changeAddress(address);

        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrow("Address is required");
    });
});