import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/AuthSlice";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 hover:bg-white/20 shadow-xl transition"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 p-5 backdrop-blur-xl bg-white/10 text-white border-r border-white/20 z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold tracking-wide">🚀 MyLMS</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-300 hover:text-red-500"
          >
            <AiFillCloseCircle size={24} />
          </button>
        </div>

        <ul className="space-y-4 text-lg font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              🏠 Home
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setIsOpen(false)}>
              📚 All Courses
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              📞 Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              ℹ️ About Us
            </Link>
          </li>

          {isLoggedIn && role === "ADMIN" && (
            <>
              <li>
                <Link to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                  🛠 Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/course/create" onClick={() => setIsOpen(false)}>
                  ➕ Create Course
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="mt-10 border-t border-white/20 pt-4 space-y-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="block text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-md shadow-lg hover:brightness-110 transition"
                onClick={() => setIsOpen(false)}
              >
                🔐 Login
              </Link>
              <Link
                to="/signup"
                className="block text-center bg-gradient-to-r from-green-500 to-lime-400 text-white py-2 rounded-md shadow-lg hover:brightness-110 transition"
                onClick={() => setIsOpen(false)}
              >
                📝 Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/user/profile"
                className="block text-center bg-gradient-to-r from-yellow-400 to-amber-300 text-black py-2 rounded-md shadow-lg hover:brightness-110 transition"
                onClick={() => setIsOpen(false)}
              >
                👤 Profile
              </Link>
              <button
                onClick={(e) => {
                  handleLogout(e);
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-gradient-to-r from-red-600 to-red-400 text-white py-2 rounded-md shadow-lg hover:brightness-110 transition"
              >
                🚪 Logout
              </button>
            </>
          )}
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Page Content */}
      <main className="pt-6 px-4 sm:px-8 md:px-10 pb-28">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
