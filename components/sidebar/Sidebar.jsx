import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="max-w-[350px] w-full h-full bg-gray-900 text-white flex flex-col shadow-lg">
      <h2 className="text-2xl font-extrabold p-6 border-b border-gray-700">Сайдбар</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="block p-4 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-md">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="block p-4 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-md">
              Пользователи
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
