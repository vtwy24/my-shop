import { Typography } from "./mui";

const Heading = ({ component = "h1", variant, children, ...props }) => {
  return (
    <Typography component={component} variant={variant || component} {...props}>
      {children}
    </Typography>
  );
};

export default Heading;