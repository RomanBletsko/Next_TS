type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};

type Address = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type Hair = {
  color: string;
  type: string;
};

export type UserDataType = {
  age: number;
  address: Address;
  bank: Bank;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: Hair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};
