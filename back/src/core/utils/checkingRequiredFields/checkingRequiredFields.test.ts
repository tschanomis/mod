import { checkingRequiredFields } from "./checkingRequiredFields";

describe("requireFields", () => {
  it("should return all fields error", () => {
    const requiredFields = ["fieldOne", "fieldTwo"];
    const requestValue = {};

    const returnValue = checkingRequiredFields(requiredFields, requestValue);

    expect(returnValue).toEqual({ fieldOne: true, fieldTwo: true });
  });

  it("should return fieldOne error", () => {
    const requiredFields = ["fieldOne", "fieldTwo"];
    const requestValue = { fieldOne: "fieldOne" };

    const returnValue = checkingRequiredFields(requiredFields, requestValue);

    expect(returnValue).toEqual({ fieldTwo: true });
  });

  it("should return no error", () => {
    const requiredFields = ["fieldOne", "fieldTwo"];
    const requestValue = { fieldOne: "fieldOne", fieldTwo: "fieldTwo" };

    const returnValue = checkingRequiredFields(requiredFields, requestValue);

    expect(returnValue).toEqual(false);
  });
});
