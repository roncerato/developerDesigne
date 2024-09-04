import { stackList } from "@/app/constant/stackList";

export default function StackList(){
    return (
        <ul className="stack-list">
            {stackList.map((item)=>(
                <li className="stack-item" key={item.name}>
                    <item.Icon />
                </li>
            ))}
        </ul>
    )
}