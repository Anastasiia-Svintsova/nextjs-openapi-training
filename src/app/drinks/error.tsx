'use client';

const error = (error: unknown) => {
  const errorData =
    error && typeof error === 'object' && 'error' in error && error.error;

  if (errorData instanceof Error) {
    return errorData.message;
  }

  return null;
};

export default error;
