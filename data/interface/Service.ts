import { ID } from "./publicInterface";

export interface IService {
    name: string,
    icon: string,
    description: string,
    order: number,
    created_at: string,
    updated_at: string,
    iconUrl: string

}
export interface IServiceData extends IService,ID { }