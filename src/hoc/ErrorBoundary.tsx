/* eslint-disable react/destructuring-assignment */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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

interface Props extends RouteComponentProps {
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
      // eslint-disable-next-line react/no-unused-state
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

  BtnClickHandler = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ hasError: false, error: '' });
    this.props.history.replace('/');
  };

  public render() {
    if (this.state.hasError) {
      return (
        <SWrapper>
          <ErrorMessage onBtnClick={this.BtnClickHandler} errorMsg="Something went wrong." />
          <Backdrop open clicked={() => {}} />
        </SWrapper>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
