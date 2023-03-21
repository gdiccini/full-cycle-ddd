import Customer from '../entity/custumer'
import Order from '../entity/order'
import OrderItem from '../entity/orderItem'
import { v4 as uuid } from 'uuid'

export default class OrderService {
	static total(orders: Order[]): number {
		return orders.reduce((acc, order) => acc + order.total(), 0)
	}

	static placeOrder(customer: Customer, items: OrderItem[]): Order {
		if (!items.length) throw new Error('Items are empty.')

		const order = new Order(uuid(), customer.id, items)
		customer.addRewardPoints(order.total() / 2)

		return order
	}
}
