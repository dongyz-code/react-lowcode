import { menuList } from '@/config';
import { Outlet, Link } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div className="relative">
      <div className="flex h-[--header-height] items-center border-b border-gray-300 px-3">
        {menuList.map((item) => (
          <Link to={item.path} key={item.path} className="mr-8">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="rounded">
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;
