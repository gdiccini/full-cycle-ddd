import Order from './order';
import OrderItem from './orderItem';

describe('Order unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      const order = new Order('', '123', []);
    }).toThrowError('Id is required.');
  });

  it('should throw error when customerId is empty', () => {
    expect(() => {
      const order = new Order('123', '', []);
    }).toThrowError('CustomerId is required.');
  });

  it('should throw error when orderItems is empty', () => {
    expect(() => {
      const order = new Order('123', '123', []);
    }).toThrowError('Item quantity must be greater than zero.');
  });

  it('should calculate total', () => {
    const item1 = new OrderItem('123', 'item 1', 10, 'p1', 2);
    const item2 = new OrderItem('123', 'item 2', 10, 'p2', 2);
    const order = new Order('123', '123', [item1, item2]);

    expect(order.total()).toEqual(40);
  });

  it('should throw error if item quantity is not greater than 0', () => {
    expect(() => {
      const item1 = new OrderItem('123', 'item 1', 10, 'p1', 0);
      const order = new Order('123', '123', [item1]);
    }).toThrow();
  });
});
