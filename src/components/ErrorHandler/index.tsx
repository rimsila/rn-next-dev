import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const errorHandler = (error: Error) => {
  // Exception handling, such as reporting with sentry
  console.log(error);
};

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => (
  <View>
    <Text>Sorry, something went wrong</Text>
    <Button title="Retry" onPress={resetErrorBoundary} />
  </View>
);

const ErrorHandler: FC = props => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
    {props.children}
  </ErrorBoundary>
);
export default ErrorHandler;
