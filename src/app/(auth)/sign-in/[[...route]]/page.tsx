// /src/app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex-center min-h-screen bg-gray-50">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            buttonArrowIcon: "hidden",

            card: "shadow-xl rounded-2xl border border-gray-200 p-6",
            headerTitle: "text-2xl font-bold text-gray-800",
            headerSubtitle: "text-sm text-gray-500",
          },
          layout: {
            logoPlacement: "inside",
            logoImageUrl: "/logo-amber.png",
          },
        }}
      />
    </div>
  );
}
