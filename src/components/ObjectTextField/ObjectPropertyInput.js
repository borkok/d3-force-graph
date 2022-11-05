import TextField from "@material-ui/core/TextField";
import React from "react";

/**
 * Object property input component.
 *
 * @param property property to change
 * @param object object to change property of
 * @param readonly true, if input should be read only
 * @param helperText helper text
 * @param changed callback fired when the value is changed, modified object is passed to this callback as an input parameter
 * @returns input component that changes object property
 */
const ObjectPropertyInput = ({property, object, readonly, helperText, changed}) => {
    return (
        <TextField id={property}
                   key={property}
                   label={property}
                   helperText={helperText}
                   value={object[property]}

                   onChange={event => changed({
                       ...object,
                       [property]: event.target.value
                   })}
                   InputProps={{
                       "readOnly": readonly,
                   }}
                   fullWidth
                   size="small"
        />
    );
}

export default ObjectPropertyInput;