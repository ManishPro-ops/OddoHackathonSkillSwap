import React from 'react';

const RequestPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-200 font-handwriting p-6">
      <div className="border border-white rounded-[10px] p-6 mt-[-1px] bg-white flex flex-col lg:flex-row gap-8 shadow-lg">
        
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl text-black text-black">Marc Demo</h2>

          <div>
            <h3 className="text-xl text-black mb-2">Skills Offered</h3>
            <ul className="list-disc ml-5 text-black">
              <li>Graphic Design</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-black mb-2">Skills Wanted</h3>
            <ul className="list-disc ml-5 text-black">
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-black mb-2">Rating & Feedback</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-1 text-black italic">Reliable and skilled individual!</p>
          </div>
          <button className="border-2 border-[#3585c0] text-[#3585c0] px-4 py-1 rounded-xl text-lg hover:bg-[#3585c0] hover:text-white transition">
            Request
          </button>
        </div>
        

        {/* Right Side */}
        <div className="w-full lg:w-[300px] flex justify-center items-center">
          <div className="w-60 h-60 border-4 border-white rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="ggl_logo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    

    
  );
};

export default RequestPage;
