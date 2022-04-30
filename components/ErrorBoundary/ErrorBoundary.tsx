import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  moduleName?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center space-x-2 bg-red-500 p-4 text-center font-semibold text-white">
          <p>
            There was an error in loading {this.props.moduleName} module. Please
            try to refresh the page and try again.
          </p>
          <button
            className="rounded-md bg-white pt-2 pb-2 pr-4 pl-4 text-black"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
