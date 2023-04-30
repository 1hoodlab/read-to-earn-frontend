import { useToast } from "@chakra-ui/react";
import React from "react";

export default function withToast<T extends Record<any, unknown>>(
  Component: React.ComponentType<T>
) {
  const ComponentWithToast = (props: T): JSX.Element => {
    const toast = useToast();

    function success(description: string, title: string = "Success") {
      toast({
        status: "success",
        variant: "left-accent",
        position: "top-right",
        title: title,
        description: description,
      });
    }

    function error(description: string, title: string = "Error") {
      toast({
        status: "error",
        variant: "left-accent",
        position: "top-right",
        title: title,
        description: description,
      });
    }

    const newProps = { ...props, success, error } as unknown as T;
    return <Component {...newProps} />;
  };

  return ComponentWithToast;
}
