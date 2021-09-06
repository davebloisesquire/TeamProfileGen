const Manager = require("../scripts/manager");

describe("Manager subclass", () => {
  it("Take's in values and outputs values", () => {
    let Chief = new Manager("Tim", "01", "chief@control.gov", "86");
    expect(Chief.name).toBe("Tim")
    expect(Chief.id).toBe("01")
    expect(Chief.email).toBe("chief@control.gov");
    expect(Chief.officeNumber).toBe("86");
  });
  it("outputs methods correctly", () => {
    let IronMan = new Manager("Tony", "2008", "tony@stark.com", "69");
    expect(IronMan.getName()).toBe("Tony");
    expect(IronMan.getId()).toBe("2008");
    expect(IronMan.getEmail()).toBe("tony@stark.com");
    expect(IronMan.getRole()).toBe("Manager");
  })
})
