import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType{
    YouTube = "YouTube",
    Twitter = "Twitter",
}

//@ts-ignore
export function CreateContentModal({open,onClose}){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type,setType] = useState(ContentType.YouTube);

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type,
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }

    return (
        <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-200 fixed 
            flex justify-center top-0 left-0 opacity-60">
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white border opacity-100 p-4 rounded-md">
                    <div className="flex justify-end cursor-pointer">
                        <div onClick={onClose}>
                            <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder="Title"/>
                        <Input ref={linkRef} placeholder="Link"/>
                    </div>
                    <h1>Types</h1>
                    <div className="flex pb-2 gap-2 items-center justify-center ">
                        <Button text="YouTube" variant={type === ContentType.YouTube ?
                        "primary" : "secondary"} onClick={()=>{setType(ContentType.YouTube)}}/>
                        <Button text="Twitter" variant={type === ContentType.Twitter ?
                        "primary" : "secondary"} onClick={()=>{setType(ContentType.Twitter)}}/>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text="Submit"/>
                    </div>
                </span>
            </div>
            </div>
        </div>}

        </div>
    )
}

