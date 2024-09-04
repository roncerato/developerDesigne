import { socialList } from "@/app/constant/socialList";
import Link from "next/link";
import Image from "next/image";

interface IProps{
    color?: "#666" | "#42446E"
}

export default function Socials({color="#666"}: IProps){
    return (
        <ul className="social-list">
            {socialList.map(item=>(
                <li className="social-item" key={item.id}>
                    <Link href={item.href}>
                        <item.Img width={30} height={30} fill={color}/>
                    </Link>
                </li>
            ))}
        </ul>    
    )
}