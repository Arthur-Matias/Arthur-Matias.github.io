export class User {
    constructor(public name: string = "no name", public age: number = 35) { }
    hello():string{
        return `Hello ${this.name}, you have ${this.age} years`;
    }
}