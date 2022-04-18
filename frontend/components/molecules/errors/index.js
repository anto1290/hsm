export const errorMessage = (error) => {
  return (
    (error.graphQLErrors && error.message) || "Ooooops something went wrong..."
  );
};
