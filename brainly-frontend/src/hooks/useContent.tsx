import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Content {
    title: string;
    link: string;
    type: "twitter" | "youtube" | "YouTube";
}

export function useContent(): Content[] | null {
    const [contents, setContents] = useState<Content[] | null>(null);

    useEffect(() => {
        console.log('Fetching content from backend');
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            console.log('Backend response:', response.data);
            const data = response.data;
            if (Array.isArray(data)) {
                setContents(data);
            } else if (data && data.content) {
                setContents(data.content);
            } else {
                setContents([]);
            }
        })
        .catch((error) => {
            console.error('Error fetching content:', error);
            setContents([]);
        });
    }, []);

    return contents;
}