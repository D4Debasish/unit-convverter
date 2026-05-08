import { useCallback, useEffect, useMemo, useState } from "react";
import "./Converter.css";
import { categories, convertTemperature } from "../../utils/utilityFunctions";
import type { Category } from "./converter.types";
import { CategoryTypes, TemperatureUnits } from "../../utils/constants";
import Select from "../ui/templates/Select";

const Converter = () => {
  const [category, setCategory] = useState<Category>(CategoryTypes.Length);
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [error, setError] = useState("");

  const units = categories[category].units;

  const unitOptions = useMemo(
    () =>
      units.map((u) => ({
        label: `${u.label} (${u.symbol})`,
        value: u.symbol,
      })),
    [units],
  );

  const findUnitMap = useCallback(
    (value: string) => {
      return units.find((u) => u.symbol === value);
    },
    [units],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const a = categories[cat]?.units ?? [];
    setFromUnit(a?.[0]?.symbol);
    setToUnit(a?.[1]?.symbol);
    setInputValue("");
    setError("");
  };

  const result = useMemo(() => {
    if (!debouncedValue) return "";
    const num = parseFloat(debouncedValue);
    if (isNaN(num)) return "";
    if (category === CategoryTypes.Temperature) {
      return convertTemperature(num, fromUnit, toUnit)?.toFixed(6)?.toString();
    }
    const from = findUnitMap(fromUnit);
    const to = findUnitMap(toUnit);
    if (from?.toBase == null || to?.toBase == null) return "";

    return ((num * from.toBase) / to.toBase)?.toFixed(6)?.toString();
  }, [debouncedValue, category, fromUnit, toUnit, findUnitMap]);

  const handleInput = (val: string) => {
    setInputValue(val);
    setError("");
    if (val === "") return;
    const num = parseFloat(val);
    if (isNaN(num)) {
      setError("Please enter a valid number.");
      return;
    }
    if (
      category === CategoryTypes.Temperature &&
      fromUnit === TemperatureUnits.Kelvin &&
      num < 0
    ) {
      setError("Kelvin cannot be negative.");
    }
  };

  const viewResult = () => {
    return `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
  };

  return (
    <div className="converter-page">
      <div className="converter-container">
        <h1 className="converter-title">Unit Converter</h1>
        <div className="converter-tabs">
          {(Object.keys(categories) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`converter-tab ${category === cat ? "converter-tab-active" : ""}`}
            >
              {categories[cat].label}
            </button>
          ))}
        </div>
        <div className="converter-card">
          <div className="converter-row">
            <div className="converter-field">
              <label className="converter-label">From</label>
              <input
                type="number"
                min={category === CategoryTypes.Temperature ? undefined : 0}
                value={inputValue}
                onChange={(e) => handleInput(e.target.value)}
                placeholder="Enter value"
                className="converter-input"
              />

              <Select
                value={fromUnit}
                onChange={setFromUnit}
                options={unitOptions}
              />
            </div>
            <div>{"=="}</div>
            <div className="converter-field">
              <label className="converter-label">To</label>
              <input
                type="text"
                value={result}
                readOnly
                placeholder="Result"
                className="converter-input converter-result-input"
              />
              <Select
                value={toUnit}
                onChange={setToUnit}
                options={unitOptions}
              />
            </div>
          </div>
          {error && <p className="converter-error">{error}</p>}
          {result && !error && (
            <div className="converter-result-banner">
              <span className="converter-result-text">{viewResult()}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;
