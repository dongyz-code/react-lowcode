import { menuList } from '@/config';
import { Outlet, Link } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="flex items-center h-14 border-b border-gray-200 px-3">
        {menuList.map((item) => (
          <Link to={item.path} key={item.path} className="mr-8">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="p-1 rounded">
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;
