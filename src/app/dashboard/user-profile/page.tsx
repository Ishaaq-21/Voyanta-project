import ChangePasswordForm from "../(components)/PasswordForm";
import PersonalForm from "../(components)/PersonalForm";

const CustomUserProfile = async () => {
  return (
    <section>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Your Account Settings
        </h2>
        <PersonalForm />
      </div>

      <div className="border-t border-gray-400 my-12"></div>

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
