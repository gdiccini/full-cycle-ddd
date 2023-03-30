import Product from '../../entity/Product';
import RepositoryInterface from '../../@shared/repository/RepositoryInterface';

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {}
