let username: string = "joelle Biden"
let age: number = 78
let driverLicense: boolean = true


let numbers: number[] = [1, 2, 3, 4, 5]
let matrix: number[][] = [[1,2,3],[1,2,3]]

let a:any ="joey"


type Driver = {
    name: string,
    age: number,
    driverLicense: boolean,
    penatlyPoints: number,
    countryCode: CountryCodes
}

type CountryCodes = 'H' | 'F' | 'B' | 'NL' | 'D' | 'BIH' | 'US'

let joe: Driver = {
    name: "Joe Biden",
    age: 78,
    driverLicense: true,
    penatlyPoints: 0,
    countryCode: 'US'
}

interface IDriver {
    name: string,
    age: number,
    driverLicense: boolean,
    penatlyPoints: number,
    countryCode: 'H' | 'F' | 'B' | 'NL' | 'D' | 'BIH' | 'US'
}

interface IDriver {
    bloodAlcohol: number
}

let bela: IDriver = {
    name: "Bela",
    age: 69,
    driverLicense: true,
    penatlyPoints: 0,
    countryCode: 'BIH',
    bloodAlcohol: 0.5
}

type Car = {
    carType: string,
    isRolling: boolean

}

type Airplapne = {
    airPlaneNumber:number,
    isFlying: boolean
}

type Vehicle = Car | Airplapne

let mustang: Vehicle = {
    carType: "muscle",
    isRolling: true
}