import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage?: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    const message = error instanceof Error ? error.message : String(error);
    return { hasError: true, errorMessage: message };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Application crashed:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: undefined });
    // Best-effort to re-render; if global state is corrupted, force reload.
    if (typeof window !== "undefined") {
      // no-op; React will attempt to re-render children
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-lg w-full rounded-lg border border-border bg-card p-6 shadow-medium">
            <h1 className="text-xl font-semibold mb-2 text-foreground">Something went wrong</h1>
            {this.state.errorMessage && (
              <p className="text-sm text-muted-foreground mb-4">{this.state.errorMessage}</p>
            )}
            <button
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
              onClick={this.handleRetry}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}

