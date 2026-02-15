import LeftPanel from "@/app/components/auth/LeftPanel";
import Header from "@/app/components/auth/Header";
import Title from "@/app/components/auth/Title";
import LoginForm from "@/app/components/auth/LoginForm";
import SocialAuth from "@/app/components/auth/SocialAuth";
import Footer from "@/app/components/auth/Footer";

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <LeftPanel />
        <div className="p-10 flex-col">
          <Header />
          <Title />
          <LoginForm />
          <SocialAuth />
          <Footer />
        </div>
      </div>
    </main>
  );
}
