import React, { useState, useMemo, useEffect } from "react";
import { AuthService } from "../services/AuthService";

interface User {
  id: number;
  username: string;
}

interface UserContext {
  user?: User;
  setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserContext>({} as UserContext);

export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;

const Session: React.FunctionComponent = props => {
  const [user, setUser] = useState<User | undefined>();

  const value = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  useEffect(() => {
    AuthService.getSession()
      .then(user => setUser(user))
      .catch(() => {});
  }, []);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default Session;
