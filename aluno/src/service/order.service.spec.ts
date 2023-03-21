import Order from '../entity/order'
import OrderItem from '../entity/orderItem'
import OrderService from './OrderService'

describe('Order service unit tests', () => {
	it('should get total of all orders', () => {
		const item1 = new OrderItem('i1', 'item 1', 100, 'p1', 1)
		const item2 = new OrderItem('i2', 'item 2', 200, 'p2', 2)
		const item3 = new OrderItem('i3', 'item 3', 300, 'p3', 3)

		const order1 = new Order('o1', 'c1', [item1])
		const order2 = new Order('o2', 'c1', [item2])

		const total = OrderService.total([order1, order2])

		expect(total).toBe(500)
	})
})
