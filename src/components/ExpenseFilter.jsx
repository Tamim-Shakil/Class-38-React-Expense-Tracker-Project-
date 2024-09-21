/* eslint-disable react/prop-types */
export default function ExpenseFilter({ onSelectedCategory, categories }) {
  return (
    <div>
      {/* <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => {
          //   console.log(e.target.value);
          onSelectedCategory(e.target.value);
        }}
      >
        <option value={""}>All</option>
        <option value={"tour"}>tour</option>
        <option value={"utility bill"}>utility bill</option>
        <option value={"personal expense"}>personal expense</option>
      </select> */}
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => {
          //   console.log(e.target.value);
          onSelectedCategory(e.target.value);
        }}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
