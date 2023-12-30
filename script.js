"use strict";
let emp = {
    emp_name: "Navin",
    company_name: "ABC",
    address: {
        area: "Kolkata",
        city: "Jenin",
        country: "India",
    },
    display: function () {
        console.log("hi, name is: " + this.emp_name);
    },
};
emp.company_name = "XYZ";
emp.display();
console.log(emp);
//# sourceMappingURL=script.js.map