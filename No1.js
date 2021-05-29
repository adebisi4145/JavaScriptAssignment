var Doctor = {
    lastname: "adesina",
    firstname: "oladele",
    age: 32,
    address: "4, arodojo, obantoko",
    email: "adesinaoladele@gmail",

    display: function () {
        return this.lastname + " " + this.firstname;
    },
    method: function () {
        return this.age + 5
    }
}
console.log(Doctor.display());
console.log(Doctor.method());
