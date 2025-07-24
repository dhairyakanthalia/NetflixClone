export const checkValidData = (email, password) =>
{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password)

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password should be atleast 6 characters long and contain symbols, upper, lowercase char.";

    return null;
}