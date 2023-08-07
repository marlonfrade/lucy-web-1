import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Generates a class name by merging multiple class values.
 *
 * @param {...ClassValue[]} inputs - The class values to merge.
 * @return {string} - The merged class name.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates an absolute URL by concatenating the base URL with the given path.
 *
 * @param {string} path - The path to be appended to the base URL.
 * @return {string} The absolute URL formed by combining the base URL and the path.
 */
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}
