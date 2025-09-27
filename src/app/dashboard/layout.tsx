import NavItem from "./(components)/navItem";

// Helper component for SVG icons to keep the main component cleaner.
// In a real app, you might use a library like lucide-react.

// Main App Component
export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Side Navigation */}
          <nav className="w-full md:w-64 lg:w-72 bg-gray-800 p-6 md:p-8 shrink-0">
            <ul className="flex flex-col items-start space-y-2">
              <NavItem
                icon="settings"
                label="User Profile"
                href="user-profile"
              />
              <NavItem icon="briefcase" label="My bookings" href="bookings" />
              <NavItem icon="star" label="My reviews" href="reviews" />
            </ul>
          </nav>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-12">{children}</div>
        </div>
      </main>
    </div>
  );
}
