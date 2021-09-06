const Engineer = require("../scripts/engineer");

describe("Engineer subclass", () => {
  it("Take's in values and outputs values", () => {
    let Chief = new Engineer("Q", "007", "q@mi6.uk.gov", "quartermaster");
    expect(Chief.name).toBe("Q")
    expect(Chief.id).toBe("007")
    expect(Chief.email).toBe("q@mi6.uk.gov");
    expect(Chief.github).toBe("quartermaster");
  });
  it("outputs methods correctly", () => {
    let IronMan = new Engineer("Tony", "2008", "tony@stark.com", "theRealTonyStank");
    expect(IronMan.getName()).toBe("Tony");
    expect(IronMan.getId()).toBe("2008");
    expect(IronMan.getEmail()).toBe("tony@stark.com");
    expect(IronMan.getGithub()).toBe("theRealTonyStank");
    expect(IronMan.getRole()).toBe("Engineer");
  })
})
