import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  // const expenses = [
  //   { id: 1, category: "abcd", description: "test..", amount: 600 },
  //   { id: 2, category: "new", description: "test..", amount: 100 },
  //   { id: 3, category: "data", description: "test..", amount: 100 },
  //   { id: 4, category: "why", description: "test..", amount: 100 },
  // ];

  const categories = [
    "tour",
    "utility bill",
    "personal expensei, entertainment",
    "entertainment",
  ];

  const [expenses, setExpenses] = useState([
    { id: 1, category: "tour", description: "test..", amount: 600 },
    { id: 2, category: "tour", description: "test..", amount: 100 },
    { id: 3, category: "utility bill", description: "test..", amount: 100 },
    { id: 4, category: "personal expense", description: "test..", amount: 100 },
  ]);

  const [selectedCategory, setselectedCategory] = useState("");

  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const filterNumber = numbers.filter((num) => num % 2 === 0);
  // console.log(filterNumber);

  const filteredExpenses = selectedCategory
    ? expenses.filter((data) => data.category === selectedCategory)
    : expenses;

  return (
    <>
      <section className="max-w-4xl mx-auto mt-20">
        <ExpenseForm
          onSubmit={
            (data) =>
              setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
            //  console.log([...expenses, { ...data, id: expenses.length + 1 }])
          }
          categories={categories}
        />
        <ExpenseFilter
          onSelectedCategory={(category) => setselectedCategory(category)}
          categories={categories}
        />
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((data) => data.id !== id))
          }
        />
      </section>
    </>
  );
}

export default App;
