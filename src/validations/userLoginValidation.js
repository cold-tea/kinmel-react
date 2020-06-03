const userLoginValidation = user => {
    const errors = {};
    if (user.username.length < 3) errors.username = "Provide valid username";
    if (user.password.length < 3) errors.password = "Provide valid password";
    return errors;
};

export default userLoginValidation;