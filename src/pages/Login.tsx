import logo from "../assets/openmarks-logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import heroImage from "../assets/login-hero.jpg";
import api from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "student") navigate("/student");
      else if (user.role === "admin") navigate("/admin");
      else if (user.role === "reviewer") navigate("/reviewer");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-800 to-blue-600 text-white pt-6 pb-8 xl:px-12 xl:pt-8 xl:pb-10 flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 -mt-2 mb-8">
          <img
            src={logo}
            alt="OpenMarks Logo"
            className="w-10 h-10 xl:w-12 xl:h-12 object-contain"
          />
          <div>
            <h2 className="text-xl xl:text-2xl font-bold tracking-wide">
              OpenMarks
            </h2>
            <p className="text-xs xl:text-sm text-blue-200">
              TRUST. TRANSPARENCY. EXCELLANCE.
            </p>
          </div>
        </div>
        {/* Bottom Text */}
        <div>
          <h1 className="text-2xl xl:text-5xl font-bold leading-tight mb-3">
            Digital Exam, Evaluation
            <br />& Student Grievance System
          </h1>
          <p className="text-blue-100 text-base xl:text-lg">
            Secure evaluation and transparent academic management
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center flex-1 items-center">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl shadow-xl max-h-[350px] xl:max-h-[420px] object-cover w-full"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100 px-4 sm:px-6 py-12">
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Secure Login</h2>
          <p className="text-sm text-gray-500 mb-6">Access is role-based</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
