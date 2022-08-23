import { useEffect, useState } from "react";

export function useAuthUser() {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return { authUser, setAuthUser };
}
