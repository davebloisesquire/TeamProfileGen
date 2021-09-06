const Employee = require("../scripts/employee");

describe("Employee parent class", () => {
  it("Take's in values and outputs values", () => {
    let Maxwell = new Employee("Max", "86", "smart86@control.gov");
    expect(Maxwell.name).toBe("Max")
    expect(Maxwell.id).toBe("86")
    expect(Maxwell.email).toBe("smart86@control.gov");
  });
  it("outputs methods correctly", () => {
    let IronMan = new Employee("Tony", "2008", "tony@stark.com");
    expect(IronMan.getName()).toBe("Tony");
    expect(IronMan.getId()).toBe("2008");
    expect(IronMan.getEmail()).toBe("tony@stark.com");
    expect(IronMan.getRole()).toBe("Employee");
  })
})
