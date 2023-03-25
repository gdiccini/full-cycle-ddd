import Customer from '../entity/custumer'
import RepositoryInterface from './RepositoryInterface'

export default interface CustomerRepositoryInterface
	extends RepositoryInterface<Customer> {}
