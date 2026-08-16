import clsx, { type ClassValue } from "clsx";

/**
 * Combina più class name ignorando i valori falsy.
 * Punto di estensione: in futuro qui si può integrare tailwind-merge
 * se il progetto usa Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
