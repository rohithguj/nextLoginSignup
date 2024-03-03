// useAppStore.tsx
import create from "zustand";

interface StoreState {
  formData: FormState;
  step: number;
  formValid: boolean;
}

interface StoreActions {
  setFormData: (data: Partial<FormState>) => void;
  nextStep: () => void;
  previousStep: () => void;
  submitForm: () => void;
  validateForm: () => void;
}

const useSignUpStore = create<StoreState & StoreActions>((set, get) => ({
  formData: {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  },
  step: 1,
  formValid: false,
  setFormData: (data) => {
    set((state) => ({
      formData: { ...state.formData, ...(data as Partial<FormState>) },
    }));
    console.log(get().formData);
  },

  nextStep: () => set((state) => ({ step: state.step + 1 })),
  previousStep: () => set((state) => ({ step: state.step - 1 })),
  validateForm: () => {
    console.log("validating");
    const formData = get().formData;
    const emailIsValid = validateEmail(formData.email);
    const requiredFields: (keyof FormState)[] = ["username", "email"];
    const formIsValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    set({
      formValid: emailIsValid && formIsValid,
    });
  },
  submitForm: () => {
    // Validate email before submitting
    const emailIsValid = validateEmail(get().formData.email);
    if (!emailIsValid) {
      console.error("Invalid email address");
      return;
    }

    // Check if required fields are filled before submitting
    const requiredFields: (keyof FormState)[] = [
      "username",
      "email",
      "password",
    ];
    const formIsValid = requiredFields.every(
      (field) => get().formData[field].trim() !== ""
    );

    if (formIsValid) {
      // Implement your form submission logic here
      console.log("Form submitted:", get().formData);
    } else {
      console.error("Please fill in all required fields");
    }
  },
}));

const validateEmail = (email: string) => {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { useSignUpStore };
