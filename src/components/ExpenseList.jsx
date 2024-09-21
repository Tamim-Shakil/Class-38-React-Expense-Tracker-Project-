// import ExpenseFilter from "./ExpenseFilter";

/* eslint-disable react/prop-types */
export default function ExpenseList({ expenses, onDelete }) {
  return (
    <>
      <div className="overflow-x-auto max-w-[900px] mx-auto">
        <table className="table">
          {/* head */}

          <thead>
            <tr className="text-2xl text-primary">
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* show expenses */}
            {expenses.length === 0 ? (
              <p className="mt-4">No expenses found!</p>
            ) : (
              expenses?.map((expense) => (
                <tr key={expense.id} className="border-b-1 border-sky-100/10 ">
                  <th>{expense.id}</th>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => onDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
            {/* {expenses.map((expense) => (
              <tr key={expense.id}>
                <th>{expense.id}</th>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))} */}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className="text-xl text-primary">Total</td>
              <td className="text-xl text-primary">
                $
                {expenses.reduce(
                  (prev, current) => prev + parseInt(current.amount),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
