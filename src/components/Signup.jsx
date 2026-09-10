import { useActionState } from "react";

import {
  isEmail,
  hasMinLength,
  isEqualToOtherValue,
  isNotEmpty,
} from "../util/validation.js";

function signupAction(prevFormState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const role = formData.get("role");
  const acquisitionChannel = formData.getAll("acquisition");
  const agreedToTerms = formData.get("terms");
  console.log({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    role,
    acquisitionChannel,
    agreedToTerms,
  });

  let errors = [];
  if (!isEmail(email)) {
    errors.push("Invalid email address");
  }
  if (!hasMinLength(password, 6)) {
    errors.push("Password must be at least 6 characters long");
  }
  if (!isEqualToOtherValue(confirmPassword, password)) {
    errors.push("Passwords do not match");
  }
  if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
    errors.push("First name and last name are required");
  }
  if (!isNotEmpty(role)) {
    errors.push("Role is required");
  }
  if (!agreedToTerms) {
    errors.push("You must agree to the terms and conditions");
  }
  if (acquisitionChannel.length === 0) {
    errors.push("At least one acquisition source must be selected");
  }
  if (errors.length > 0) {
    console.log("Validation errors:", errors);
    return {
      errors: errors,
      enteredValues: {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        role,
        acquisitionChannel,
        agreedToTerms,
      },
    };
  }

  return { errors: null };
}

export default function Signup() {
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email || ""}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password || ""}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword || ""}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName || ""}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName || ""}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValues?.role || ""}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultValue={
              formState.enteredValues?.acquisitionChannel?.includes("google") ||
              false
            }
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultValue={
              formState.enteredValues?.acquisitionChannel?.includes("friend") ||
              false
            }
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultValue={
              formState.enteredValues?.acquisitionChannel?.includes("other") ||
              false
            }
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultValue={formState.enteredValues?.agreedToTerms || false}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
