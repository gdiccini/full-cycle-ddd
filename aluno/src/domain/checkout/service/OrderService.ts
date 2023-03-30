import Order from '../entity/order';
import { v4 as uuid } from 'uuid';
import Customer from '../../customer/entity/custumer';
import OrderItem from '../entity/orderItem';

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (!items.length) throw new Error('Items are empty.');

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);

    return order;
  }
}
