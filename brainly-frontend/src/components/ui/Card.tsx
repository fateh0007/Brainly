import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps{
    title : string;
    link: string;
    type: string;
}

export function Card({title,link,type}: CardProps){
    return (
        <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 text-md border
        min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2">
                    <ShareIcon size='md'/>
                    </div>  
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2">
                        <a href={link.replace("x.com","twitter.com")} target="_blank">
                            <ShareIcon size='md'/>
                        </a> 
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type.toLowerCase() === "youtube" && <iframe className="w-full" 
                src={link.replace("watch","embed").replace("?v=","/")}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>}

                {type.toLowerCase() === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com","twitter.com")}>{title}</a> 
                </blockquote>}

                {/* If neither Twitter nor YouTube, just show the title and link */}
                {(type.toLowerCase() !== "twitter" && type.toLowerCase() !== "youtube") && (
                    <div className="pt-4">
                        <p className="text-gray-700">{title}</p>
                        <a href={link} target="_blank" className="text-blue-500 hover:text-blue-600">{link}</a>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
} 