import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button title={title} marginVertical={15} primary onPress={handleSubmit} />
  );
};

export default SubmitButton;
