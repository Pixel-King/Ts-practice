import {ID} from './Utilits';

export default class Product{
    readonly id: number
    readonly name: string
    readonly price: number
    constructor(name: string, price: number){
        this.name = name
        this.price = price
        this.id = ID.getNewId();
    }
}