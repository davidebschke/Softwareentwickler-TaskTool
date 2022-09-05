import {Messages} from "./Messages";
import axios from "axios";
import {useEffect, useState} from "react";

export default function useMessages() {

    const [messages, setMessages] = useState<Messages[]>([]);

    useEffect(() => {
        getAllMessages()
    }, [])

    const getAllMessages = () => {
        axios.get("/stt/messages")
            .then((response) => response.data)
            .then(setMessages)
    }
    const deleteMessage = (id: string) => {
        return axios.delete("/stt/messages/" + id)
            .then((response) => response.status)
            .then(getAllMessages)
    }
    return {
        messages,
        deleteMessage
    }
}
