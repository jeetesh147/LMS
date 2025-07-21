import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomePageImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from "../Layout/HomeLayout";

function HomePage() {
  // Dummy statistics
  const stats = [
    { label: "Students Enrolled", value: "25,000+" },
    { label: "Courses Available", value: "120+" },
    { label: "Certificates Issued", value: "15,000+" },
  ];

  return (
    <HomeLayout>
      <div
        className="min-h-[90vh] px-8 sm:px-16 py-12 flex flex-col md:flex-row items-center justify-between"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #e0f7ff 40%, #cce5ff 80%, #b3d4ff 100%)",
        }}
      >
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={HomePageImage}
            alt="Learn Online"
            className="w-[85%] max-w-md drop-shadow-xl rounded-lg"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="w-full md:w-1/2 p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md space-y-6 text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-snug"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Learn. Grow. Succeed.
          </motion.h1>

          <p className="text-lg sm:text-xl text-gray-700">
            Master today's most in-demand tech skills and shape the future you dream of — all from the comfort of your home.
          </p>

          <ul className="list-disc list-inside space-y-2 text-md sm:text-lg text-gray-700">
            <li>🌐 Interactive online classes</li>
            <li>💼 Learn job-ready skills from industry experts</li>
            <li>🕒 Flexible schedule & lifetime content access</li>
            <li>📜 Earn professional certificates</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/courses">
              <button className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                Browse Courses
              </button>
            </Link>
            <Link to="/about">
              <button className="px-6 py-3 rounded-lg font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                About Us
              </button>
            </Link>
          </div>

          {/* Dummy Stats */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-blue-50 rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-bold text-blue-700">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
