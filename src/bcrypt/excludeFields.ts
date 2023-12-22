import { Key } from "node:readline";

export function excludeFields(body: any, keys: string[]) {
  return Object.fromEntries(
    Object.entries(body).filter(([key]) => !keys.includes(key))
  );
}
