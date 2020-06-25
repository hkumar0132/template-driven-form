export class Employee {
    constructor(   
        public first_name : string = "",
        public last_name : string = "",
        public email : string = "",
        public phone : string = "",
        public password : string = "",
        public confirm_password : string = ""
    ) {}
}