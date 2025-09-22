import Finder from './Finder';

const Nav = () => {
  return (
    <header className="bg-neutral-100 w-full mx-auto">
      <div>
        <nav className='w-full mb-2 bg-zinc-900 text-white py-1 px-2 text-xs'>
          <ul className="flex gap-4 text-neutral-400">
            <li className=''>
              <a href="#" className="block hover:text-orange-500">Contacto
              </a>
            </li>
            <li className=''>
              <a href="#" className="block hover:text-orange-500">Sucursales
              </a>
            </li>
            <li className=''>
              <a href="#" className="block hover:text-orange-500">Nosotros
              </a>
            </li>

          </ul>
        </nav>
      </div>
      <div className="flex gap-5 justify-between w-11/12 mx-auto items-center">
        <h1 className="font-[Rajdhani] xs:text-xl md:text-3xl text-orange-600 drop-shadow-md">
          <a href="/" className="">INTERCAR</a>
        </h1>
        <Finder />
      </div>
    </header>
  );
};

export default Nav;
