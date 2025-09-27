"use server";
type Errors = {
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};
export type FormState = {
  message: string;
  errors?: Errors;
};
export async function ChangePasswordAction(user: any, formData: FormData) {
  const currentPassword = formData.get("password-current") as string;
  const newPassword = formData.get("password") as string;
  const confirmNewPassword = formData.get("password-confirm") as string;
  const errors: Errors = {};
  if (!currentPassword) {
    errors.currentPassword = "Current password is required";
  }
  if (!newPassword) {
    errors.newPassword = "New password is required";
  }
  if (!confirmNewPassword) {
    errors.confirmNewPassword = "Confirm new password is required";
  }

  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = "Passwords do not match";
  }

  if (Object.keys(errors).length > 0) {
    throw new Error(JSON.stringify(errors));
  }
  try {
    await user?.updatePassword({
      currentPassword: currentPassword,
      newPassword: newPassword,
    });
    return { message: "Password has been changed successfully" };
  } catch (err: any) {
    return { message: "Something went wrong!", errors: err.errors };
  }
}
