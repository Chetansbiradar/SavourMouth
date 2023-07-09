import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Chetan Default Context (Not updating bcz out of userProvider, check App.js",
        email: "chetancontext@localhost"
    }
});

UserContext.displayName = "UserContext";
// this is used to give a name to the context so that it is easy to debug

export default UserContext;