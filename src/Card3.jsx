import React from "react";
import { MapPin, Calendar } from "lucide-react";

const Card3 = ({image}) => {
  return (
    <div className="max-w-[760px] bg-white border border-gray-200 rounded-sm overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Section */}
      <div className=" aspect-[7/5] relative w-full overflow-hidden">
        <img
          src={image}
          alt="Project"
          className=" cursor-pointer w-full h-full object-cover"
        />

        
        <span className="absolute top-3 right-3 bg-[#0b3558] text-white text-xs px-3 py-1 font-medium">
          Deposit Work
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-5">
        
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 uppercase">
          MEGA ITI NARMADAPURAM
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={14} />
          <span>NARMADAPURAM, Narmadapuram</span>
        </div>

        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={14} />
          <span>Completion Year</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 py-3 text-sm text-gray-700 font-medium">
        MPHIIDB
      </div>
    </div>
  );
};

export default Card3;
