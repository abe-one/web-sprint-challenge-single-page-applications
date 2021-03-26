import * as yup from "yup";

import pizzaSizes from "./App";

export default yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2, "Please include a name at least 2 characters long"),

  size: yup.string().oneOf([pizzaSizes], "Please select a size"),
});
