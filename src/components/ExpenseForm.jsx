/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
export default function ExpenseForm({ onSubmit, categories }) {
  // const categories = [
  //   "tour",
  //   "utility bill",
  //   "personal expensei, entertainment",
  //   "entertainment",
  // ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="my-5">
        <h2 className="text-3xl font-bold">Add Expense 📝</h2>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 max-w-[500px] mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered input-primary w-full"
          {...register("description", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
        />
        {errors.description?.type === "required" && (
          <span className="text-red-500">This field is required.</span>
        )}

        {errors.description?.type === "minLength" && (
          <span className="text-red-500">
            Text is too small! text should be more than 3 characters.
          </span>
        )}

        {errors.description?.type === "maxLength" && (
          <span className="text-red-500">
            Text is too large! text should not be more than 20 characters.
          </span>
        )}

        <input
          type="number"
          placeholder="Amount"
          className="input input-bordered input-primary w-full"
          {...register("amount", {
            required: true,
            maxLength: 10,
          })}
        />

        {errors.amount?.type === "required" && (
          <span className="text-red-500">This field is required.</span>
        )}

        {errors.amount?.type === "maxLength" && (
          <span className="text-red-500">
            should not be more than 10 digits.
          </span>
        )}

        <label htmlFor="category">Choose Category</label>
        <select
          className="select select-bordered w-full select-primary "
          {...register("category")}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value={"Add Expense"}
          className="btn btn-secondary"
        />
      </form>
      <hr className="mb-10" />
    </>
  );
}
