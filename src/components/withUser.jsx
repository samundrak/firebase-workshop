import React from 'react';
import { UserContext } from '../providers/UserProvider';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
const withUser = Component => {
  const wrappedComponent = props => {
    return (
      <UserContext.Consumer>
        {user => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
  wrappedComponent.displayName = `WithUser(${getDisplayName(
    wrappedComponent,
  )})`;
  return wrappedComponent;
};
export default withUser;
