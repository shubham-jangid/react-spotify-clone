import React, { useEffect } from "react";
import { useStateValues } from "../contexts/StateProvider";

export default function useAuth({ code }) {
  // const [{ token }, dispatch] = useStateValues();

  console.log(code);
  useEffect(() => {
    console.log(code);
  }, [code]);
  return <div></div>;
}
