"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const PersonalForm = () => {
  const userObj = useUser().user;
  return (
    <form className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full relative overflow-hidden bg-gray-200">
          <Image
            src={userObj?.imageUrl || ""}
            alt="User photo"
            className="object-cover "
            fill={true}
          />
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue={(userObj?.firstName as string) || ""}
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
          defaultValue={
            (userObj?.emailAddresses?.[0]?.emailAddress as string) || ""
          }
          required
          className="mt-1 block  text-gray-500 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform hover:scale-105"
        >
          Save settings
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;
