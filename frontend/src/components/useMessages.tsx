import {Messages} from "./Messages";
import axios from "axios";
import {useEffect, useState} from "react";
import {NewMessage} from "./NewMessage"

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
    const addMessage = (newMessage: NewMessage) => {

        return axios.post("/stt/messages", newMessage)
            .then((response) => {
                    getAllMessages()
                    return response.data
                }
            );
    }
    return {
        messages,
        deleteMessage,
        addMessage
    }
}
