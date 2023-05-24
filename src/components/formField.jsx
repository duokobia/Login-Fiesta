/* eslint-disable react/prop-types */
import { memo, useCallback } from "react";

// eslint-disable-next-line import/prefer-default-export
export const Field = memo((props) => {
  const onFieldChange = useCallback(
    (event) => {
      // eslint-disable-next-line react/prop-types
      props.onFieldChange(props.fieldName, event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps, react/prop-types
    [props.onFieldChange, props.fieldName],
  );

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <fieldset>
      // eslint-disable-next-line react/prop-types, react/prop-types
      <label htmlFor={props.fieldName}>{props.labelText}</label>
      
      <input
        type={props.fieldType}
        name={props.fieldName}
        id={props.fieldName}
        onChange={onFieldChange}
        value={props.fieldValue}
      />

      {props.hasError && (
        <p>{`Please fill in correct value for "${props.labelText}".`}</p>
      )}
    </fieldset>
  );
});
