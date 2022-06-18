export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  avgRates: number;
  manufacture: IGeneralObject;
  origin: IGeneralObject;
  depth: number;
}

export interface IGeneralObject {
  id: number;
  name: string;
}