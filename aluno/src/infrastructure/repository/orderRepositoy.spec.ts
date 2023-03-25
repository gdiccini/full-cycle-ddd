import { Sequelize } from 'sequelize-typescript'
import Address from '../../domain/entity/address'
import Customer from '../../domain/entity/custumer'
import CustomerModel from '../db/sequelize/model/customerModel'
import CustomerRepository from './CustomerRepository'

describe('Order repository test', () => {
	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: ':memory:',
			logging: false,
			sync: { force: true },
		})

		await sequelize.addModels([OrderModel])
		await sequelize.sync()
	})

	afterEach(async () => {
		await sequelize.close()
	})
})
