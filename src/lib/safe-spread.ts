function safeSpread<T>(base: T, update: Partial<T>) {
  if (typeof base !== "object" || base === null) return base;
  if (typeof update !== "object" || update === null) return base;

  const result = { ...base };

  for (const key in update) {
    if (Object.prototype.hasOwnProperty.call(base, key)) {
      if (
        typeof base[key] === "object" &&
        base[key] !== null &&
        typeof update[key] === "object" &&
        update[key] !== null &&
        !Array.isArray(base[key]) &&
        !Array.isArray(update[key])
      ) {
        result[key] = safeSpread(base[key], update[key]) as any;
      } else {
        result[key] = update[key] as any;
      }
    }
  }

  return result;
}

export { safeSpread };
