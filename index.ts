let username: string = "joelle Biden"
let age: number = 78
let driverLicense: boolean = true

type Driver = {
    name: string,
    age: number,
    driverLicense: boolean,
    penatlyPoints: number,
    countryCode: 'H' | 'F' | 'B' | 'NL' | 'D' | 'BIH'
}

let joe: Driver = {
    name: "Joe Biden",
    age: 78,
    driverLicense: true,
    penatlyPoints: 0,
    countryCode: 'H'
}