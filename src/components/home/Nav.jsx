import { useState } from "react";

const Nav = () => {
    const [show, setShow] = useState(false);
    return (
	<nav class="w-full bg-neutral-800 py-1">
				<button className="mx-auto flex text-white font-semibold tracking-widest"
                onClick={(e)=> setShow(!show)}>
					Menu
					<img src="/menu.svg" alt="menu-img" class="w-6"/>
				</button>
                <ul 
                    className={`${show ? "h-full" : "h-0" } bg-white w-full z-10 overflow-hidden text-center`}>
                    <li className="lista">
                        <a href="/">Inicio</a>
                            <img src="/home.svg" alt="home-svg" className="inline-block w-4 h-4 ml-1"/>
                        </li>
                    <li className="lista">
                        <a href="/#nosotros">Quienes somos</a>
                            <img src="/question.svg" alt="question-svg" className="inline-block w-4 h-4 ml-1"/>
                        </li>
                    <li className="lista">
                        <a href="/#contacto">Contacto</a>
                            <img src="/phone.svg" alt="question-svg" className="inline-block w-4 h-4 ml-1"/>
                    </li>
                    <li className="lista">
                        <a href="/#sucursales">Sucursales</a>
                            <img src="/sucursales.svg" alt="question-svg" className="inline-block w-4 h-4 ml-1"/>
                    </li>
                    <li className="lista">
                        <a href="/ofertas">Ofertas</a>
                            <img src="/sale.svg" alt="question-svg" className="inline-block w-4 h-4 ml-1"/>
                    </li>
                    <li className="lista">
                        <a href="/categorias?filter=1&id=1&page=0">Categorias</a>
                            <img src="/categories.svg" alt="question-svg" className="inline-block w-4 h-4 ml-1"/>
                    </li>
                </ul>
			</nav>
			
    )
}

export default Nav;