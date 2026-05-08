import type { Category, Unit } from "../components/Converter/converter.types";
import {
  length_data,
  temperature_data,
  TemperatureUnits,
  weight_data,
} from "./constants";

export function convertTemperature(
  value: number,
  from: string,
  to: string,
): number {
  let celsius: number;
  if (from === TemperatureUnits.Celsius) {
    celsius = value;
  } else if (from === TemperatureUnits.Fahrenheit) {
    celsius = (value - 32) * (5 / 9);
  } else {
    celsius = value - 273.15;
  }

  if (to === TemperatureUnits.Celsius) return celsius;
  if (to === TemperatureUnits.Fahrenheit) return celsius * (9 / 5) + 32;

  return celsius + 273.15;
}

export const categories: Record<Category, { label: string; units: Unit[] }> = {
  length: { label: "Length", units: length_data },
  weight: { label: "Weight", units: weight_data },
  temperature: { label: "Temperature", units: temperature_data },
};
