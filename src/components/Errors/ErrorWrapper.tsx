import { Component, useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

type TOwnProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type ErrorRefType = {
  hasError: boolean;
  error?: Error;
};

const ErrorWrapper = (props: TOwnProps) => {
  const { children, fallback } = props;
  const errorRef = useRef<Component<TOwnProps, ErrorRefType>>(null);
  const location = useLocation();

  useEffect(() => {
    if (errorRef.current && errorRef.current.state.hasError) {
      errorRef.current.setState({ hasError: false, error: undefined });
    }
  }, [location]);

  return (
    <ErrorBoundary fallback={fallback} ref={errorRef as any}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorWrapper;
