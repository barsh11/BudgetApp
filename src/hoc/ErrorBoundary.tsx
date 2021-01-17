/* eslint-disable react/destructuring-assignment */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import Backdrop from '../components/atoms/Backdrop/Backdrop';
import ErrorMessage from '../components/molecules/ErrorMessage/ErrorMessage';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <SWrapper>
          <ErrorMessage errorMsg={this.state.error || 'Something went wrong.'} />
          <Backdrop open clicked={() => {}} />
        </SWrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
