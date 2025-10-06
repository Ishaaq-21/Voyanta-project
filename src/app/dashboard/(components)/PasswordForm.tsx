"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useFormStatus } from "react-dom";

type PasswordFormState = {
  currPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type formMsg = {
  message: string;
  error: boolean;
};
const initialState: PasswordFormState = {
  currPassword: "",
  newPassword: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const { user } = useUser();
  const { pending } = useFormStatus();
  const [passwordState, setPasswordState] =
    useState<PasswordFormState>(initialState);
  const [message, setMessage] = useState<formMsg | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true); // show message
    setTimeout(() => {
      setShowMessage(false);
      setPasswordState({
        currPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }, 3000);
  };
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordState?.confirmPassword !== passwordState?.newPassword) {
      setMessage({ message: "Passwords don't match", error: true });
      return;
    }

    try {
      await user?.updatePassword({
        currentPassword: passwordState?.currPassword,
        newPassword: passwordState?.newPassword as string,
      });
      setMessage({ message: "Password updated successfully ✅", error: false });
    } catch (err: any) {
      console.log("clerk error : ", err);
      setMessage({
        message: " " + (err.message || "Error updating password"),
        error: true,
      });
    }
  };
  return (
    <form onSubmit={handleFormSubmission} className="space-y-6">
      {showMessage && !message?.error && (
        <p className="font-bold mb-5 text-green-600 text-sm">
          {message?.message}
        </p>
      )}
      <div>
        <label
          htmlFor="password-current"
          className="block text-sm font-medium text-gray-700"
        >
          Current password
        </label>
        <input
          type="password"
          value={passwordState?.currPassword}
          onChange={(e) =>
            setPasswordState({
              ...passwordState,
              currPassword: e.target.value as string,
            } as PasswordFormState)
          }
          name="password-current"
          id="password-current"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          New password
        </label>
        <input
          value={passwordState?.newPassword}
          onChange={(e) =>
            setPasswordState({
              ...passwordState,
              newPassword: e.target.value as string,
            } as PasswordFormState)
          }
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password-confirm"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm password
        </label>
        <input
          type="password"
          name="password-confirm"
          value={passwordState?.confirmPassword}
          onChange={(e) =>
            setPasswordState({
              ...passwordState,
              confirmPassword: e.target.value as string,
            } as PasswordFormState)
          }
          id="password-confirm"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div className="text-right">
        <button
          onClick={handleClick}
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform hover:scale-105 cursor-pointer"
        >
          {pending ? "Changing..." : "Change Password"}
        </button>
      </div>
      {message?.error && (
        <p className="font-bold mb-5 text-red-600 text-sm">
          {message?.message}
        </p>
      )}
    </form>
  );
}
