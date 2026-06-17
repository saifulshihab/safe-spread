import { mergeSafe } from "../src/lib/merge-safe";

test("Should correctly spread regular objects", () => {
  const obj1 = { name: "John Doe", age: 34 };
  const obj2 = { age: 27, dob: "1998" };

  const result = mergeSafe(obj1, obj2);
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

  const result = mergeSafe(obj1, obj2);
  expect(result).toEqual({
    name: "John Doe",
    age: 27,
    address: { district: "Chandpur" },
    skills: ["ts"],
  });
});

test("Should correctly spread regular objects", () => {
  const obj1 = { name: "John Doe", age: 34 };
  const obj2 = { age: 27, dob: "1998" };

  const result = mergeSafe(obj1, obj2);
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

  const result = mergeSafe(obj1, obj2);
  expect(result).toEqual({
    name: "John Doe",
    age: 27,
    address: { district: "Chandpur" },
    skills: ["ts"],
  });
});

test("Should return base if update is null", () => {
  const obj1 = { a: 1, b: 2 };
  const result = mergeSafe(obj1, null as any);
  expect(result).toEqual(obj1);
});

test("Should return base if update is not an object", () => {
  const obj1 = { a: 1, b: 2 };
  const result = mergeSafe(obj1, 42 as any);
  expect(result).toEqual(obj1);
});

test("Should return base if base is not an object", () => {
  const result = mergeSafe(42 as any, { a: 1 });
  expect(result).toBe(42);
});

test("Should not add new keys from update", () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const result = mergeSafe(obj1, obj2 as Partial<typeof obj1>);
  expect(result).toEqual({ a: 1 });
});

test("Should handle arrays as values", () => {
  const obj1 = { arr: [1, 2, 3] };
  const obj2 = { arr: [4, 5] };
  const result = mergeSafe(obj1, obj2);
  expect(result).toEqual({ arr: [4, 5] });
});

test("Should deep merge only existing nested keys", () => {
  const obj1 = { a: { b: 1, c: 2 }, d: 3 };
  const obj2 = { a: { b: 10, x: 20 }, d: 4 };
  const result = mergeSafe(obj1, obj2 as any);
  expect(result).toEqual({ a: { b: 10, c: 2 }, d: 4 });
});

test("Should handle base or update as undefined", () => {
  expect(mergeSafe(undefined as any, { a: 1 })).toBe(undefined);
  expect(mergeSafe({ a: 1 }, undefined as any)).toEqual({ a: 1 });
});

test("Should not mutate base object", () => {
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { c: 3 } };
  const result = mergeSafe(obj1, obj2);
  expect(result).not.toBe(obj1);
  expect(result.b).not.toBe(obj1.b);
  expect(obj1).toEqual({ a: 1, b: { c: 2 } });
});
