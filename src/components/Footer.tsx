// Imports
import { SiVite, SiTailwindcss} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

// Importamos el tipo de dato de los iconos
import type { IconType } from "react-icons";

const Footer = () => {
    // Array de iconos
    const Icons = [
        { id: 1, url:"https://vitejs.dev/", size: 50, color:"#14b8a6", icon: SiVite},
        { id: 2, url:"https://react.dev/", size: 50, color:"#14b8a6", icon: FaReact},
        { id: 3, url:"https://www.typescriptlang.org/", size: 50, color:"#14b8a6", icon: BiLogoTypescript},
        { id: 4, url:"https://tailwindcss.com/", size: 50, color:"#14b8a6", icon: SiTailwindcss},
    ]

    return (
        <footer className="w-full flex justify-center pt-5 pb-10 flex-col">
            <div className="w-1/2 mx-auto flex items-center justify-evenly mb-10">
                {/* Iteramos los iconos */}
                {
                    Icons.map( icon => 
                        <IconFooter 
                            key={icon.id} 
                            url={icon.url}
                            size={icon.size}
                            color={icon.color}
                            iconHTML={icon.icon}
                        />
                    )
                }
            </div>
            <p className="text-slate-600 font-semibold text-center">
                Desarrollado por {""}
                <a href="https://www.linkedin.com/in/roque-lopez-4800731a2/" target="_blank" className="font-bold text-teal-600">
                    @Roque Lopez {""}
                </a>
                - 2024
            </p>
        </footer>
    )
}

// Tipado
type IconFooterProps = {
    url: string;
    size: number;
    color: string;
    iconHTML: IconType;
}
// Component de los iconos
const IconFooter = ({ url, size, color, iconHTML}: IconFooterProps)=>{
    const IconComponent = iconHTML;
    return(
        <a href={ url } target="_blank" rel="noopener noreferrer">
            <IconComponent 
                color={color}
                size={size}
                className="transition-all hover:drop-shadow-xl shadow-teal-500 hover:scale-125 cursor-pointer"
            />
        </a>
    )
}

export default Footer