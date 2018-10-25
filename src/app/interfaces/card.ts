export interface Card {
  id: number;
  _id_: string;
  index:number;
  isActive: true,
  picture: string;
  age: number;
  name: CardName;
  email: string;
  phone: string;
  address: string;
  about: string;
  tags: Array<string>;
  favoriteFruit: string;
}

export interface CardName {
  first: string;
  last: string;
}
