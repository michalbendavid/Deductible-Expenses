export const processFirebaseErrors = (msg) => {
    switch (msg) {
        case "Firebase: Error (auth/internal-error).":
            return "Sorry, Something went wrong";
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            return "Password should be at least 6 characters";
        case "Firebase: Error (auth/email-already-in-use).":
            return "Email already in use try a different mail";
        case "Firebase: Error (auth/user-not-found).":
            return "User was not found. Want to register?";
        case "Firebase: Error (auth/wrong-password).":
            return "Wrong password please try again";
        case "Firebase: Error (auth/invalid-email).":
            return "Invalid email, please try again";
        default:
            return msg;
    }
};