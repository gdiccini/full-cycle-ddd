import Product from '../entity/Product'
import RepositoryInterface from './RepositoryInterface'

export default interface ProductRepositoryInterface
	extends RepositoryInterface<Product> {}
