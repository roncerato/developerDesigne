import { navigationList } from "@/app/constant/navList";
import Link from "next/link";
import { Span } from "../Span/Span";

interface IProps{
    size?: "l" | "m"
}

export default function Navigation({size="l"}: IProps) {
  return (
    <ul className="navigation">
        {navigationList.map((item)=>(
            <li className="nav-item" key={item.id}>
                <Link href={"/"}>
                    <Span size={size}>
                        {item.name}
                    </Span>
                </Link>
            </li> 
        ))}
    </ul>
  );
}
