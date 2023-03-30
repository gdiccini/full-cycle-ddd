// Exemplo de um objeto de valor. Uma classe que apenas carrega consigo propriedades que são imutáveis, ele se auto-valida e não possui id

export default class Address {
  street: string;
  number: number;
  city: string;
  zipCode: string;

  constructor(street: string, number: number, city: string, zipCode: string) {
    this.street = street;
    this.number = number;
    this.city = city;
    this.zipCode = zipCode;

    this.validate();
  }

  public validate() {
    if (!this.street.length || !this.number || !this.city.length || !this.zipCode.length) throw new Error('Dados de endereço inválidos.');
  }

  public toString() {
    return `${this.street} ${this.number}, ${this.city}`;
  }
}
