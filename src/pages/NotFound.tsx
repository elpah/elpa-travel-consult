import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[240px] font-bold text-blue-600/10 leading-none select-none">
            404
          </h1>
          <div className="-mt-24 md:-mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-slate-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or
              doesn't exist.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-full text-sm font-semibold transition-all border border-slate-200 hover:shadow-md active:scale-95 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
        <div className="mt-16 opacity-50">
          <svg
            className="w-full max-w-md mx-auto"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="100" r="80" fill="#3B82F6" opacity="0.1" />
            <circle cx="150" cy="120" r="40" fill="#3B82F6" opacity="0.15" />
            <circle cx="250" cy="80" r="50" fill="#3B82F6" opacity="0.12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
