import React, { useState, useEffect } from "react";
import * as yup from "yup";

export default (SignUpForm) => {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const [post, setPost] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted", formSubmit);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup
      .string()
      .email("Must be a valid username/email")
      .required("Must use email address"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Password is required"),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })

      .catch((err) => {
        console.log(err);
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("input has changed", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Please enter first and last name"
            value={formState.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>
        <label htmlFor="email">
          Create Username:
          <input
            id="email"
            name="username"
            placeholder="Please enter email for username"
            value={formState.username}
            onChange={inputChange}
          />
          {errors.username.length > 0 ? (
            <p className="error">{errors.username}</p>
          ) : null}
        </label>
        <label htmlFor="password">
          Create Password:
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Please create password"
            value={formState.password}
            onChange={inputChange}
          />
          {errors.password.length > 6 ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </label>
        <button disabled={buttonDisabled} type="submit">
          Submit
        </button>
        <button>Cancel</button>
      </form>
    </div>
  );
};
