import Address from './address'

export default class Customer {
	/* Uma entidade é unica pois ela possui um id */
	_id: string

	/* As outras propriedades da entidade são mutáveis */
	_name: string

	/* Endereço possui uma expressividade muito maior agora, visto que ele tem uma tipagem muito mais caracterizada para o que ele representa */
	_address: Address

	constructor(id: string, name: string, address: Address) {
		this._id = id
		this._name = name
		this._address = address
	}

	get id(): string {
		return this.id
	}

	get name(): string {
		return this._name
	}

	get address(): Address {
		return this._address
	}

	set name(name: string) {
		this._name = name
	}

	set address(address: Address) {
		this._address = address
	}
}
