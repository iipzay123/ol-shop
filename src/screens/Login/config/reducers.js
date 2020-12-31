const Login = (state = [], action) => {
  switch (action.key) {
    case 'REQUEST_Login':
      return {
        ...state,
      };
    case 'REQUEST_SIGNIN_FAILED':
      return {
        ...state,
      };
    case 'REQUEST_SIGNIN_SUCCESS':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Login;
