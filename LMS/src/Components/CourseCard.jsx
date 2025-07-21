import { useNavigate } from 'react-router-dom';

export default function CourseCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/courses/${data?.description}`, { state: { ...data } })
      }
      className="w-[22rem] h-[390px] cursor-pointer rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 hover:scale-[1.02] transition-all shadow-xl overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden h-48">
        <img
          src={data?.thumbnail?.secure_url}
          alt="course-thumbnail"
          className="h-full w-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 text-white">
        <h2 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 line-clamp-2 transition">
          {data?.title}
        </h2>
        <p className="text-sm text-gray-300 line-clamp-2 italic">
          “{data?.description}”
        </p>

        <p className="text-sm">
          <span className="text-cyan-400 font-semibold">📁 Category:</span>{' '}
          {data?.category}
        </p>

        <p className="text-sm">
          <span className="text-pink-400 font-semibold">🎞 Lectures:</span>{' '}
          {data?.numbersOfLectures}
        </p>

        <p className="text-sm">
          <span className="text-green-400 font-semibold">👤 Instructor:</span>{' '}
          {data?.createdBy}
        </p>
      </div>
    </div>
  );
}
