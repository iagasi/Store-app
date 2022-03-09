import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: " Smartphones" },
            { id: 2, name: "Refrigeratot" },
            { id: 3, name: "Tv" },
            { id: 4, name: "Acsesuares" }
        ]
        this._brands = [
            { id: 1, name: " mock data Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Nokia" },
            { id: 4, name: "huawei" },
            { id: 5, name: "HITACHI" },
            { id: 6, name: "Sony" }
        ]

        this._devices = [
            { id: 1, name: " mock data Samsung galaxy s10+", price: 100, raiting: 5, typeId: 1, brandId: 1, img: "https://img.zoommer.ge/zoommer-images/thumbs/0099794_samsung-galaxy-s10-8gb-ram-128gb-lte-g973fd-black_550.png" },
            { id: 2, name: "IPhone10x", price: 200, raiting: 10, typeId: 1, brandId: 2, img: "eee" },
            { id: 27, name: "Nokia n95", price: 20, raiting: 10, typeId: 1, brandId: 3, img: "eee" },

            { id: 3, name: "huawei P-smart 2019", price: 1078950, raiting: 5, typeId: 1, brandId: 4, img: "eee" },
            { id: 4, name: "Hitachi refregerator", price: 111200, raiting: 10, typeId: 2, brandId: 5, img: "https://images.news18.com/ibnlive/uploads/2021/09/google-search-16313394283x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" },
            { id: 5, name: " Bosch refregirator", price: 100, raiting: 5, typeId: 2, brandId: null, img: "eee" },
            { id: 6, name: "Sony Tv 1000inch", price: 200, raiting: 10, typeId: 3, brandId: 6, img: "eee" },
            { id: 7, name: "Lg Tv", price: 1078950, raiting: 5, typeId: 3, brandId: null, img: "eee" },
            { id: 8, name: "CAse for Iphone x", price: 111200, raiting: 10, typeId: 4, brandId: null, img: "eee" },
        ]

        this._filteredDevices =[]
        this._selectedType = { id: 0 }
        this._selectBrand = { id: 0 }
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    get Types() {
        return this._types
    }
    setBrands(brands) {
        this._brands = brands
    }
    get Brands() {
        return this._brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get Devices() {
        return this._devices
    }




    setSelectedBrand(brand) {
        this._selectBrand = brand

    }

    get selectedBrand() {
        return this._selectBrand
    }



    setSelectedType(type) {
        this._selectedType = type
    }
    get selectedType() {
        return this._selectedType
    }

    setFilteredDevices(devices) {
        this._filteredDevices = devices
    }

    get filteredDevices() {
        return this._filteredDevices
    }
}




