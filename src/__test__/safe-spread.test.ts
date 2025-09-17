import { safeSpread } from "../lib/safe-spread";

test("Regular object spreaded correctly", () => {
  const obj1 = { name: "John Doe", age: 34 };
  const obj2 = { age: 27, dob: "1998" };

  const result = safeSpread(obj1, obj2);
  expect(result).toEqual({ name: "John Doe", age: 27 });
});

test("Nested level object spreaded correctly", () => {
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
