function Employee(name, companyName, jobPosition, salary) {
  this.name = name;
  this.companyName = companyName;
  this.jobPosition = jobPosition;
  this.salary = salary;
}

function displayEmployeeList() {
  const employee1 = new Employee("John Doe", "Samsung", "employee", 50000);
  const employee2 = new Employee("Jane Smith", "Facebook", "director", 80000);
  const employee3 = new Employee("Michael Johnson", "Apple", "boss", 100000);

  const ulElement = document.getElementById("employeeList");
  const liElement1 = document.createElement("li");

  liElement1.textContent = ` Name: ${employee1.name}, Company: ${employee1.companyName}, Position: ${employee1.jobPosition}, Salary: ${employee1.salary};`;
  ulElement.appendChild(liElement1);

  const liElement2 = document.createElement("li");
  liElement2.textContent = `Name: ${employee2.name}, Company: ${employee2.companyName}, Position: ${employee2.jobPosition}, Salary: ${employee2.salary};`;
  ulElement.appendChild(liElement2);

  const liElement3 = document.createElement("li");
  liElement3.textContent = `Name: ${employee3.name}, Company: ${employee3.companyName}, Position: ${employee3.jobPosition}, Salary: ${employee3.salary};`;
  ulElement.appendChild(liElement3);
}

displayEmployeeList();
