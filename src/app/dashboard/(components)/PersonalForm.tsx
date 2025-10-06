"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formMsg } from "./PasswordForm";
import { UserRound } from "lucide-react";

const PersonalForm = () => {
  const userObj = useUser().user;
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [message, setMessage] = useState<formMsg>({
    message: "",
    error: false,
  });
  const showSuccessMsg = () => {
    setMessage({ message: "✅ Name updated successfully!", error: false });
    setTimeout(() => {
      setMessage({ message: "", error: false });
    }, 3000);
  };
  useEffect(() => {
    if (userObj) {
      setFirstNameState(userObj.firstName || "");
      setLastNameState(userObj.lastName || "");
    }
  }, [userObj]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await userObj?.update({
        firstName: firstNameState.trim(),
        lastName: lastNameState.trim(),
      });
      showSuccessMsg();
    } catch (error) {
      console.log(error);
      setMessage({ message: "❌ Failed to update name.", error: true });
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {message && (
        <p className={`${message.error ? "text-red-500" : "text-green-500"}`}>
          {message.message}
        </p>
      )}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full relative overflow-hidden bg-gray-200 flex-center">
          {userObj?.imageUrl.length ? (
            <Image
              src={userObj?.imageUrl}
              alt="User photo"
              className="object-cover "
              fill={true}
            />
          ) : (
            <UserRound />
          )}
        </div>
        <button
          type="button"
          className="text-amber-600 font-semibold hover:text-amber-500 transition-colors cursor-pointer"
        >
          Choose new photo
        </button>
      </div>
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          value={firstNameState}
          onChange={(e) => setFirstNameState(e.target.value)}
          type="text"
          id="firstName"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          value={lastNameState}
          onChange={(e) => setLastNameState(e.target.value)}
          type="text"
          id="lastName"
          required
          className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          disabled
          required
          defaultValue={
            (userObj?.emailAddresses?.[0]?.emailAddress as string) || ""
          }
          className="mt-1 block  text-gray-500 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform hover:scale-105 cursor-pointer"
        >
          {isLoading ? "Changing..." : "Change name"}
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;
