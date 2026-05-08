export const LengthUnits = {
  Meter: "m",
  Kilometer: "km",
  Centimeter: "cm",
  Millimeter: "mm",
} as const;

export const WeightUnits = {
  Kilogram: "kg",
  Gram: "g",
  Milligram: "mg",
} as const;

export const TemperatureUnits = {
  Celsius: "°C",
  Fahrenheit: "°F",
  Kelvin: "K",
} as const;

export const CategoryTypes = {
  Length: "length",
  Weight: "weight",
  Temperature: "temperature",
} as const;

export const length_data = [
  { label: "Meter", symbol: LengthUnits.Meter, toBase: 1 },
  { label: "Kilometer", symbol: LengthUnits.Kilometer, toBase: 1000 },
  { label: "Centimeter", symbol: LengthUnits.Centimeter, toBase: 0.01 },
  { label: "Millimeter", symbol: LengthUnits.Millimeter, toBase: 0.001 },
];

export const weight_data = [
  { label: "Kilogram", symbol: WeightUnits.Kilogram, toBase: 1 },
  { label: "Gram", symbol: WeightUnits.Gram, toBase: 0.001 },
  { label: "Milligram", symbol: WeightUnits.Milligram, toBase: 0.000001 },
];

export const temperature_data = [
  { label: "Celsius", symbol: TemperatureUnits.Celsius },
  { label: "Fahrenheit", symbol: TemperatureUnits.Fahrenheit },
  { label: "Kelvin", symbol: TemperatureUnits.Kelvin },
];
