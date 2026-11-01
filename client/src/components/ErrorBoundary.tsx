import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Link } from "wouter";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service (e.g., Sentry)
    if (process.env.NODE_ENV === "production") {
      // TODO: Send to error tracking service
      // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
    } else {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
          <div className="w-full max-w-md space-y-6 text-center">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </div>
            
            <div>
              <h1 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">Something went wrong</h1>
              <p className="mx-auto mb-4 max-w-prose text-base leading-relaxed text-slate-600">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
              </p>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-muted-foreground mb-2">
                    Error details (development only)
                  </summary>
                  <pre className="max-h-64 overflow-auto rounded-lg bg-muted p-3 text-xs">
                    {this.state.error.toString()}
                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                  </pre>
                </details>
              )}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button onClick={this.handleReset} variant="outline" size="lg">
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Try Again
              </Button>
              <Link href="/" className={buttonVariants({ size: "lg" })}>
                <Home className="h-4 w-4" aria-hidden="true" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

