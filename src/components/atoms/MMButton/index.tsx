import { Button } from "flowbite-react";

const MMButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MMButton;
