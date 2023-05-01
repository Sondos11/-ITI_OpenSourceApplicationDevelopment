import sqlite3


class Employee:
    all_employees = []
    db = sqlite3.connect('employee.db')
    cursor = db.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS employee(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            age INTEGER,
            department TEXT,
            salary REAL
        )
    ''')

    def __init__(self, first_name, last_name, age, department, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.department = department
        self.salary = salary
        self.__class__.all_employees.append(self)
        self.__class__.cursor.execute('''
            INSERT INTO employee(first_name, last_name, age, department, salary)
            VALUES (?, ?, ?, ?, ?)
        ''', (self.first_name, self.last_name, self.age, self.department, self.salary))
        self.__class__.db.commit()

    def transfer(self, new_department):
        self.department = new_department
        self.__class__.cursor.execute('''
            UPDATE employee SET department = ? WHERE id = ?
        ''', (self.department, self.id))
        self.__class__.db.commit()

    def fire(self):
        self.__class__.all_employees.remove(self)
        self.__class__.cursor.execute('''
            DELETE FROM employee WHERE id = ?
        ''', (self.id,))
        self.__class__.db.commit()

    def show(self):
        print(f"Name: {self.first_name} {self.last_name}")
        print(f"Age: {self.age}")
        print(f"Department: {self.department}")
        print(f"Salary: {self.salary}")

    @classmethod
    def list_employees(cls):
        cls.cursor.execute('SELECT * FROM employee')
        employees = cls.cursor.fetchall()
        for employee in employees:
            print(f"Name: {employee[1]} {employee[2]}")
            print(f"Age: {employee[3]}")
            print(f"Department: {employee[4]}")
            print(f"Salary: {employee[5]}")
            print()


class Manager(Employee):
    def __init__(self, first_name, last_name, age, department, salary, managed_department):
        super().__init__(first_name, last_name, age, department, salary)
        self.managed_department = managed_department

    def show(self):
        print(f"Name: {self.first_name} {self.last_name}")
        print(f"Age: {self.age}")
        print(f"Department: {self.department}")
        print("Salary: confidential")


def add_employee():
    first_name = input("Enter first name: ")
    last_name = input("Enter last name: ")
    age = int(input("Enter age: "))
    department = input("Enter department: ")
    salary = float(input("Enter salary: "))
    emp_type = input("Are you adding an employee (e) or manager (m): ")
    if emp_type == "e":
        emp = Employee(first_name, last_name, age, department, salary)
    elif emp_type == "m":
        managed_department = input("Enter managed department: ")
        emp = Manager(first_name, last_name, age,
                      department, salary, managed_department)
    print("Employee added successfully.")
    print()


def transfer_employee():
    name = input("Enter the name of the employee: ")
    for emp in Employee.all_employees:
        if emp.first_name.lower() == name.lower():
            new_department = input("Enter the new department: ")
            emp.transfer(new_department)
            print("Employee department transferred successfully.")
            print()
            return
    print("Employee not found.")
    print()


def fire_employee():
    name = input("Enter the name of the employee: ")
    for emp in Employee.all_employees:
        if emp.first_name.lower() == name.lower():
            emp.fire()
            print("Employee fired successfully.")
            print()
            return
    print("Employee not found.")
    print()


def show_employee():
    name = input("Enter the name of the employee: ")
    for emp in Employee.all_employees:
        if emp.first_name.lower() == name.lower():
            emp.show()
            print()
            return
    print("Employee not found.")
    print()


def list_employees():
    Employee.list_employees()


def main_menu():
    while True:
        print("Menu:")
        print("Enter 'add' to add a new employee.")
        print("Enter 'transfer' to transfer an employee to a new department.")
        print("Enter 'fire' to fire an employee.")
        print("Enter 'show' to show employee data.")
        print("Enter 'list' to list all employees.")
        print("Enter 'q' to quit the program.")
        choice = input("Enter your choice: ")
        if choice == "add":
            add_employee()
        elif choice == "transfer":
            transfer_employee()
        elif choice == "fire":
            fire_employee()
        elif choice == "show":
            show_employee()
        elif choice == "list":
            list_employees()
        elif choice == "q":
            print("Exiting program.")
            break
        else:
            print("Invalid choice.")
            print()


if __name__ == "__main__":
    main_menu()
