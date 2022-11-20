import { useEffect, useState } from "react";

const Admin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setIsAdmin(data.isAdmin)
            setIsLoading(false)
        });
    }
  }, [email]);
  return [isAdmin, isLoading];
};

export default Admin;
