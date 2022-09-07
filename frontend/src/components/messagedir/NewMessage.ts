import {Messages} from "./Messages";

export type NewMessage = Omit<Messages, "id">;
