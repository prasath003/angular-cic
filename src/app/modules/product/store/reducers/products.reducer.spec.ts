import {reducer} from "./products.reducer";
import {initialState} from "../state/intialState";

describe('Reducer',()=>{
  it('should have initial state',()=>{
    const expected = initialState;
    const action = { type : 'GetProductLoad'} as any;
    expect(reducer(undefined, action)).toEqual(expected);
  })

  it('should have product data',()=>{
    const action = { type : 'GetProductSuccess'} as any;
    expect(reducer(undefined, action)).toBeDefined();
  })
})
