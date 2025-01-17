import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "FC");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.changeAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 4);
const item2 = new OrderItem("2", "Item 2", 30, "p2", 5);
const order = new Order("1", "123", [item1, item2]);
