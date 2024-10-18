import { ChevronRight } from "lucide-react";

interface TabHeaderProps {
    title: string,
    subHeader?: Map<number, string>
}

const TabHeader: React.FC<TabHeaderProps> = ({ title, subHeader }) => {
    console.log(subHeader);

    const hasSubHeader = subHeader && subHeader.size > 0;

    return (
        <section className="flex items-center space-x-2">
            <h1 className="text-2xl pt-5 font-[900] text-neutral-600 drop-shadow-sm">
                {title}
            </h1>
            <div className="flex items-end space-x-2">
                {hasSubHeader && (
                    <div className="flex justify-center items-center text-purple-500 p-2 rounded-full">
                        <ChevronRight size={18} strokeWidth={4} />
                    </div>
                )}
                <div>
                    {hasSubHeader && Array.from(subHeader.entries()).map(([key, value]) => (
                        <h1 className="text-2xl pt-5 font-[900] text-neutral-600 drop-shadow-sm" key={key}>
                            {value}
                        </h1>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TabHeader;
