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
                    <li className="lista"><a href="/">Inicio</a></li>
                    <li className="lista"><a href="/#nosotros">Quienes somos</a></li>
                    <li className="lista"><a href="/#contacto">Contacto</a></li>
                    <li className="lista"><a href="/#sucursales">Sucursales</a></li>
                    <li className="lista"><a href="/busqueda">Ofertas</a></li>
                    <li className="lista"><a href="/categorias?filter=1&id=1&page=0">Categorias</a></li>
                </ul>
			</nav>
			
    )
}

export default Nav;