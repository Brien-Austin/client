import {  FcDataConfiguration, FcDataEncryption, FcDecision,  FcMindMap, FcMultipleDevices,  FcScatterPlot, FcServices, FcSettings } from 'react-icons/fc';
import { IconType } from 'react-icons/lib';
import Category from './category';

const CategoryList = () => {
  const iconMap: Record<
    "AI" | "FullStack" | "DataScience" | "DataEngineering" | "CloudComputing" | "ML" | "DevOps" | "Cybersecurity", 
    IconType
  > = {
    FullStack : FcMultipleDevices ,
    AI: FcDecision,
    DataScience: FcScatterPlot,
    DataEngineering: FcDataConfiguration,
    CloudComputing: FcServices,
    ML: FcMindMap,
    DevOps: FcSettings,
    Cybersecurity: FcDataEncryption
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
