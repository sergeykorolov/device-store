import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://img.moyo.ua/img/products/4772/29_600.jpeg?1613548208'},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://img.moyo.ua/img/products/4772/29_600.jpeg?1613548208'},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://img.moyo.ua/img/products/4772/29_600.jpeg?1613548208'},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://img.moyo.ua/img/products/4772/29_600.jpeg?1613548208'},
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}