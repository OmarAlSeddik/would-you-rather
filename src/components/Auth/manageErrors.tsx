const manageErrors = {
  emailError: (error: any) => {
    return (
      (error && error["message"] === "Firebase: Error (auth/invalid-email).") ||
      (error &&
        error["message"] === "Firebase: Error (auth/user-not-found).") ||
      (error &&
        error["message"] ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts.") ||
      (error &&
        error["message"] === "Firebase: Error (auth/email-already-in-use).")
    );
  },

  emailHelperText: (error: any) => {
    if (error && error["message"] === "Firebase: Error (auth/invalid-email).") {
      return "Invalid email.";
    }
    if (
      error &&
      error["message"] === "Firebase: Error (auth/user-not-found)."
    ) {
      return "User not found.";
    }
    if (
      error &&
      error["message"] ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts."
    ) {
      return "Access to this account has been temporarily disabled due to many failed login attempts.";
    }
    if (
      error &&
      error["message"] === "Firebase: Error (auth/email-already-in-use)."
    ) {
      return "Email already in use.";
    } else return "Requires a valid email format.";
  },

  passwordError: (error: any) => {
    return (
      (error &&
        error["message"] === "Firebase: Error (auth/wrong-password).") ||
      (error &&
        error["message"] ===
          "Firebase: Password should be at least 6 characters (auth/weak-password).")
    );
  },

  passwordHelperText: (error: any) => {
    if (
      error &&
      error["message"] === "Firebase: Error (auth/wrong-password)."
    ) {
      return "Wrong password.";
    }
    if (
      error &&
      error["message"] ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      return "Weak password.";
    } else return "Needs to be at least 6 characters long.";
  },
};

export default manageErrors;
