// declaration of object
function Employee(name,age,salary,city,state,pincode) {
	this.name = name;
	this.age = age;
	this.salary = salary;
	this.address = {
		"city" : city,
	    "state" : state,
		"pincode" : pincode
	};
}
// constructing objects
var emp = new Array();
emp[0] = new Employee("shanthee",29,50000,"bangalore","karnataka",560103);
emp[1] = new Employee("pravin",29,50000,"hosur","tamilnadu",635126);
emp[2] = new Employee("anand",33,100000,"chennai","tamilnadu",600028);
emp[3] = new Employee("swathy",29,50000,"chennai","tamilnadu",600027);
emp[4] = new Employee("manda",35,75000,"bangalore","karnataka",560102);

//printing on console using for loop
for (i=0;i<emp.length;i++) {
	console.log("Employee: " +(i+1));
	console.log("Name: " +emp[i].name);
	console.log("Age: " +emp[i].age);
	console.log("Salary: " +emp[i].salary);
	console.log("City: " +emp[i].address.city);
	console.log("State: " +emp[i].address.state);
	console.log("Pincode: " +emp[i].address.pincode);
}
