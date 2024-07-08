export const isEmailOK = (email) =>{
    const emailRegax = /^[a-zA-Z]+@[a-zA-Z0-9]+$/;
    return emailRegax.test(email)
};

export const isPasswordOK = (password) =>{
    return password.length >= 8;
};