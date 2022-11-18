export interface IProduct {
  id?: number;
  uid?: string,
  blend_name?: string,
  origin?: string,
  variety?: string,
  notes?: string,
  intensifier?: string
}

export interface ProductState {
  listOfProducts: IProduct[];
  message: string;
}

export interface AppStateInterface {
  products : ProductState
}
