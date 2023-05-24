import { memo } from "react";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Field } from "./formField";

// eslint-disable-next-line import/prefer-default-export
export const Form = memo((props) => (
  // eslint-disable-next-line react/prop-types
  <form onSubmit={props.onSubmit} noValidate>
    <Field
      labelText="First name"
      fieldType="text"
      fieldName="firstName"
      // eslint-disable-next-line react/prop-types
      fieldValue={props.values.firstName}
      // eslint-disable-next-line react/prop-types
      hasError={props.errors.firstName}
      // eslint-disable-next-line react/prop-types
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Last name"
      fieldType="text"
      fieldName="lastName"
      // eslint-disable-next-line react/prop-types
      fieldValue={props.values.lastName}
      // eslint-disable-next-line react/prop-types
      hasError={props.errors.lastName}
      // eslint-disable-next-line react/prop-types
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Email"
      fieldType="email"
      fieldName="email"
      // eslint-disable-next-line react/prop-types
      fieldValue={props.values.email}
      // eslint-disable-next-line react/prop-types
      hasError={props.errors.email}
      // eslint-disable-next-line react/prop-types
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Password (+8 characters)"
      fieldType="password"
      fieldName="password"
      // eslint-disable-next-line react/prop-types
      fieldValue={props.values.password}
      // eslint-disable-next-line react/prop-types
      hasError={props.errors.password}
      // eslint-disable-next-line react/prop-types
      onFieldChange={props.onFieldChange}
    />

    <Field
      labelText="Personal website"
      fieldType="url"
      fieldName="website"
      // eslint-disable-next-line react/prop-types
      fieldValue={props.values.website}
      // eslint-disable-next-line react/prop-types
      hasError={props.errors.website}
      // eslint-disable-next-line react/prop-types
      onFieldChange={props.onFieldChange}
    />

    <button type="submit">Send</button>
  </form>
));
