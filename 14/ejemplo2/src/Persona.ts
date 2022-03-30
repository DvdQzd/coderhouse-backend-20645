export default class Persona {
   
    constructor(private readonly fname: string, private readonly lname: string) {}
   
    getFullName(): string {
      return `${this.fname} ${this.lname}`;
    } 
}
   