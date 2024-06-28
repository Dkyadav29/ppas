// pages/signup.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpForm from '../components/SignupForm';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SignUpForm />

        <Footer />

      </main>
    </div>
  );
}
