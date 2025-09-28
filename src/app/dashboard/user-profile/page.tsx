import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import ChangePasswordForm from "../(components)/PasswordForm";

const CustomUserProfile = async () => {
  const authObj = await auth();

  const userObj = await currentUser();

  console.log(authObj);
  console.log(userObj);
  return (
    <section>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Your Account Settings
        </h2>
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
              defaultValue={
                (userObj?.emailAddresses?.[0]?.emailAddress as string) || ""
              }
              required
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
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
      </div>

      <div className="border-t border-gray-200 my-12"></div>

      {/* Password Change Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Password Change
        </h2>
        <ChangePasswordForm />
      </div>
    </section>
  );
};

export default CustomUserProfile;
