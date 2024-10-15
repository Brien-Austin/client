
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
}

const Category = ({ label, value, icon: Icon }: CategoryItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentcategoryId = searchParams.get("categoryID");
  const currenttitle = searchParams.get("title");

  const isselected = currentcategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl({
      url: location.pathname,
      query: {
        title: currenttitle,
        categoryID: isselected ? null : value,
      },
    }, { skipNull: true, skipEmptyString: true });

    navigate(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'py-2 px-3 text-sm border hover:border border-slate-200 rounded-full flex items-center hover:border-purple-700 transition',
        isselected && "border-purple-600 bg-purple-200/20 text-purple-600"
      )}
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

export default Category;
