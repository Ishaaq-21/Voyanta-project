"use client";
import { ChangePasswordAction, FormState } from "@/_lib/actions";
import { useUser } from "@clerk/nextjs";
import { useActionState } from "react";

const initialState: FormState = {
  message: "",
  errors: {},
};
export default function ChangePasswordForm() {
  const { user } = useUser();
  const changePasswordWithUser = ChangePasswordAction.bind(
    null,
    user
  ); /*Argument of type 'UserResource | null | undefined' is not assignable to parameter of type 'FormState'.
  Type 'undefined' is not assignable to type 'FormState'.ts( */
  const [state, formAction, isPending] = useActionState(
    // I need to fix this and make sure everything will work well.
    changePasswordWithUser,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label
          htmlFor="password-current"
          className="block text-sm font-medium text-gray-700"
        >
          Current password
        </label>
        <input
          type="password"
          name="password-current"
          id="password-current"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
        {state.errors?.currentPassword && (
          <p className="font-bold text-red-600 text-sm mt-4 ">
            {state.errors.passwordCurrent}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          New password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
        {state.errors?.newPassword && (
          <p className="font-bold text-red-600 text-sm mt-4 ">
            {state.errors.newPassword}
          </p>
        )}
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
          id="password-confirm"
          placeholder="••••••••"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
        {state.errors?.confirmNewPassword && (
          <p className="font-bold text-red-600 text-sm mt-4 ">
            {state.errors.confirmNewPassword}
          </p>
        )}
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform hover:scale-105 cursor-pointer"
        >
          {isPending ? "Changing..." : "Change Password"}
        </button>
      </div>
      {state.message && state.errors?.length === 0 && (
        <p className="font-bold text-green-600 text-sm mt-">{state.message}</p>
      )}
    </form>
  );
}
