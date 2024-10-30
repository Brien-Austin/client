import React from 'react';
import { PlayCircle, BookOpen, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MyCourseListProps {
  id: string;
  progress: number;
  title: string;
  chapters: number | undefined;
  imageUrl: string;
  description: string;
}

const MyCoursesList: React.FC<MyCourseListProps> = ({
  id,
  progress,
  title,
  description,
  chapters,
  imageUrl
}) => {
    const navigate = useNavigate()
  return (
    <div key={id} className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/3 relative">
          <img 
            className="h-48 md:h-full w-full object-cover" 
            src={imageUrl} 
            alt={title}
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
            {chapters} chapters
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm line-clamp-2">
              {description}
            </p>

            {/* Progress Section */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="text-purple-600 font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* chapters and progress */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{chapters} Lessons</span>
              </div>
              <div className="flex items-center">
                <BarChart className="w-4 h-4 mr-1" />
                <span>{progress}% Complete</span>
              </div>
            </div>
          </div>

          {/* Continue  */}
          <div className="mt-4">
            <button onClick={()=>{navigate(`/mycourses/course/${id}`)}} className="group w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <span>Continue Learning</span>
              <PlayCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesList;