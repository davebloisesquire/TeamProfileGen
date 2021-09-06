const Intern = require("../scripts/intern");

describe("Intern subclass", () => {
  it("Take's in values and outputs values", () => {
    let Chief = new Intern("Tim", "01", "chief@control.gov", "harvard");
    expect(Chief.name).toBe("Tim")
    expect(Chief.id).toBe("01")
    expect(Chief.email).toBe("chief@control.gov");
    expect(Chief.school).toBe("harvard");
  });
  it("outputs methods correctly", () => {
    let IronMan = new Intern("Tony", "2008", "tony@stark.com", "MIT");
    expect(IronMan.getName()).toBe("Tony");
    expect(IronMan.getId()).toBe("2008");
    expect(IronMan.getEmail()).toBe("tony@stark.com");
    expect(IronMan.getSchool()).toBe("MIT");
    expect(IronMan.getRole()).toBe("Intern");
  })
})
