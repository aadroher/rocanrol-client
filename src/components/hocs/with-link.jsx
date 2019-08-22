import React from 'react';
import { Link } from 'react-router-dom';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const withLink = ButtonComponent => {
  const WithLink = ({ children, ...props }) => (
    <ButtonComponent component={AdapterLink} {...props}>
      {children}
    </ButtonComponent>
  );

  const buttonComponentDisplayName =
    ButtonComponent.displayName || ButtonComponent.name;
  WithLink.displayName = `withLink(${buttonComponentDisplayName})`;

  return WithLink;
};

export default withLink;
