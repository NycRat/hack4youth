import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getGlobalState } from "./state";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCardioScore() {
  // const cardioData = getGlobalState("cardio");
  // let score = 0;
  // const maxScore = cardioData.length;
  // for (const data of cardioData) {
  //   score +=
  //     (Math.min(data.distance, 3000) / 3000 +
  //       Math.min(data.duration, 15) / 15) /
  //     2;
  // }
  // return Math.round((score / maxScore) * 100);
  return 60;
}

export function calculateWeightsScore() {
  // const weightsData = getGlobalState("weights");
  // let score = 0;
  // const maxScore = weightsData.length;
  // for (const data of weightsData) {
  //   score +=
  //     (Math.min(data["set-1"], 5) / 5 +
  //       Math.min(data["set-2"], 5) / 5 +
  //       Math.min(data["set-3"], 5) / 5 +
  //       Math.min(data.rpe, 10) / 10) /
  //     4;
  // }
  // return Math.round((score / maxScore) * 100);
  return 75;
}

export function calculateNutritionScore() {
  return 100;
}

export function calculateOverallHealthScore() {
  return (
    (calculateCardioScore() +
      calculateWeightsScore() +
      calculateNutritionScore()) /
    3
  );
}
