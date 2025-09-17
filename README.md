# safe-spread

A helper function that updates only the existing keys of an object in JS, deeply merging values without adding new keys.

- Works recursively on nested objects.
- Ignores keys that don’t exist in the base object.
- Can be written in immutable mode (returns a new copy, safe for React/Redux) or mutable mode (updates the original object in place).
