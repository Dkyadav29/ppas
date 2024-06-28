// components/WelcomeContent.js
const WelcomeContent = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Welcome to Our Service!</h2>
      <p className="text-lg text-center max-w-2xl mb-8 text-gray-700">
        Discover quick solutions and reduce stress with our easy setup. No custom code needed, just seamless functionality.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
    </main>
  );
};

export default WelcomeContent;
