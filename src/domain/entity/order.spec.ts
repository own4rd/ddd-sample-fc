import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw a error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it("should throw a error when customer id is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    });

    it("should throw a error when customer id is empty", () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrow("Item qtd must be greater then 0");
    });

    it("should calculate total", () => {
        const item = new OrderItem("i1", "item 1", 100, "p1", 2);
        const item2 = new OrderItem("i2", "item 2", 200, "p2", 2);
        const order = new Order("o1", "c1", [item]);
        let total = order.total();

        expect(total).toBe(200);

        const order2 = new Order("o2", "c1", [item, item2]);
        total = order2.total();

        expect(total).toBe(600);
    });

    it("should throw error if the item qtd is less or equals than 0", () => {
        
        expect(() => {
            const item = new OrderItem("i1", "item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item]);
        }).toThrow("Quantity must be greather than 0")


    });

});