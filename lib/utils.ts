import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCardioScore(
  distance: number,
  duration: number,
  RPE: number,
) {}
export function calculateWeightsScore(RPE: number) {}
export function calculateNutritionScore() {}
export function calculateOverallHealthScore() {
  return 75;
}
