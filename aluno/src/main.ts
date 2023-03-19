import Address from './entity/address'
import Customer from './entity/custumer'
import Order from './entity/order'
import OrderItem from './entity/orderItem'

let customer = new Customer('123', 'Giovani Diccini')

const item1 = new OrderItem('1', 'Item 1', 10, 'p1', 1)
const item2 = new OrderItem('2', 'Item 2', 10, 'p2', 1)

const order = new Order('1', customer.id, [item1, item2])
