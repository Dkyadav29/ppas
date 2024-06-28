// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer'
import WelcomeContent from '../components/WelcomeContent';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WelcomeContent />
      <Footer />
       

    </div>
  );
}

 