import Address from './entity/address'
import Customer from './entity/custumer'
import Order from './entity/order'
import OrderItem from './entity/orderItem'

let address = new Address('Rua bepe vanni', 264, '18271-170', 'Tatuí')
let customer = new Customer('123', 'Giovani Diccini', address)

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 10)

const order = new Order('1', customer.id, [item1, item2])
