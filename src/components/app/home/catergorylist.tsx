import { FcCommandLine, FcEngineering, FcFilmReel, FcMultipleDevices, FcMusic, FcOldTimeCamera, FcSportsMode } from 'react-icons/fc';
import { IconType } from 'react-icons/lib';
import Category from './category';

const CategoryList = () => {
  const iconMap: Record<
    "Music" | "Coding" | "Photography" | "Fitness" | "Accounting" | "Computer Science" | "Filming" | "Engineering", 
    IconType
  > = {
    Coding : FcCommandLine ,
    Music: FcMusic,
    Photography: FcOldTimeCamera,
    Fitness: FcSportsMode,
    Accounting: FcFilmReel,
    "Computer Science": FcMultipleDevices,
    Filming: FcFilmReel,
    Engineering: FcEngineering
  };

  return (
    <div className="flex mb-2 items-center overflow-x-auto gap-x-2 pb-2">
      {Object.entries(iconMap).map(([name, Icon]) => (
        <Category key={name} label={name} icon={Icon} value={name} />
      ))}
    </div>
  );
};

export default CategoryList;
