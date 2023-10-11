import { itemListProps } from "../../Pages/shopping/interface";
import { api } from "../api";

export async function createCard(payload: itemListProps) {
    return await api.post('api/card/list', payload)
}