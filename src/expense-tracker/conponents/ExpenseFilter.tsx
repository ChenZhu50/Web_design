import React from "react";
import Categories from "../categories";

interface Props {
  onSelect: (value: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelect((e.target as HTMLSelectElement).value)}
    >
      <option value="">All Categories</option>
      {Categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
