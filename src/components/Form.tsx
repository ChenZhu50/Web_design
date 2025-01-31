import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "age field is required" }).int().min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid},
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // 等于我们只要register function 从这个useForm hook里面

  const onsubmit = (data: FieldValue<any>) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })} //这里的register是一个function，我们可以用它来注册我们的input field,如果不满足 那么submit button就会被disable
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
