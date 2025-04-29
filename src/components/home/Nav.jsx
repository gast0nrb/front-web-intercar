import { useState } from "react";

const Nav = () => {
    const [show, setShow] = useState(false);
    return (
	<nav class="w-full bg-neutral-800 py-1">
				<button class="mx-auto flex text-white font-semibold tracking-widest"
                onClick={(e)=> setShow(!show)}>
					Menu
					<img src="/menu.svg" alt="menu-img" class="w-6"/>
				</button>
                <ul 
                    className={`${show ? "h-full" : "h-0" } bg-white w-full z-10 overflow-hidden text-center`}>
                    <li className="lista">Inicio</li>
                    <li className="lista">Quienes somos</li>
                    <li className="lista">Contacto</li>
                    <li className="lista">Sucursales</li>
                    <li className="lista">Ofertas</li>
                    <li className="lista">Categorias</li>
                </ul>
			</nav>
			
    )
}

export default Nav;