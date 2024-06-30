import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("OrderService unit tests", () => {
    it("Should get total of all orders", () => {
        const orderItem1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
        const orderItem2 = new OrderItem("i1", "Item 1", 200, "p1", 2);

        const order1 = new Order("o1", "c1", [orderItem1]);
        const order2 = new Order("o2", "c1", [orderItem2]);
         
        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500);
    });
});