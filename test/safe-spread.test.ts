import { safeSpread } from "../src/lib/safe-spread";

test("Should correctly spread regular objects", () => {
  const obj1 = { name: "John Doe", age: 34 };
  const obj2 = { age: 27, dob: "1998" };

  const result = safeSpread(obj1, obj2);
  expect(result).toEqual({ name: "John Doe", age: 27 });
});

test("Should correctly spread nested level objects", () => {
  const obj1 = {
    name: "John Doe",
    age: 34,
    address: { district: "Dhaka" },
    skills: ["js"],
  };

  const obj2 = {
    age: 27,
    dob: "1998",
    address: { district: "Chandpur", thana: "Faridganj" },
    skills: ["ts"],
  };

  const result = safeSpread(obj1, obj2);
  expect(result).toEqual({
    name: "John Doe",
    age: 27,
    address: { district: "Chandpur" },
    skills: ["ts"],
  });
});
