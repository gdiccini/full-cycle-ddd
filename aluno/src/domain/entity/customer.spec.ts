import Address from './address'
import Customer from './custumer'

describe('Customer unit tests', () => {
	it('should throw error when id is empty', () => {
		expect(() => {
			let customer = new Customer('', 'Giovani')
		}).toThrowError('Id is required')
	})

	it('should throw error when name is empty', () => {
		expect(() => {
			let customer = new Customer('123', '')
		}).toThrowError('Name is required')
	})

	it('should change name', () => {
		let customer = new Customer('123', 'Giovani')
		customer.changeName('João')

		expect(customer.name).toBe('João')
	})

	it('should throw error when change name to empty value', () => {
		expect(() => {
			let customer = new Customer('123', 'Giovani')
			customer.changeName('')
		}).toThrowError('Name is required')
	})

	it('should activate customer', () => {
		const customer = new Customer('1', 'Customer 1')
		const address = new Address('Street 1', 123, '00000-000', 'Tatuí')
		customer.changeAddress(address)

		customer.activate()

		expect(customer.isActive()).toBe(true)
	})

	it('should throw error on activate when customer address is undefined', () => {
		expect(() => {
			const customer = new Customer('1', 'Customer 1')

			customer.activate()
		}).toThrowError('Address is mandatory to activate customer.')
	})

	it('should deactivate customer', () => {
		const customer = new Customer('1', 'Customer 1')
		customer.deactivate()

		expect(customer.isActive()).toBe(false)
	})

	it('should add reward points', () => {
		const customer = new Customer('c1', 'Customer 1')
		expect(customer.rewardPoints).toBe(0)

		customer.addRewardPoints(10)
		expect(customer.rewardPoints).toBe(10)

		customer.addRewardPoints(10)
		expect(customer.rewardPoints).toBe(20)
	})
})
