// Suggested code may be subject to a license. Learn more: ~LicenseLog:3041860300.
javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartCoding = () => {
    navigate('/components/CodeEditor');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">Code Editor</h1>
      <p className="text-xl text-gray-600 mb-10">
        Start coding instantly in your browser.
      </p>
      <button
        onClick={handleStartCoding}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
      >
        Start Coding
      </button>
    </div>
  );
};

export default LandingPage;
