import { IApiResponse } from "./publicInterface";
import { ISampleData } from "./Sample";
import { IServiceData } from "./Service";

export interface IResultHome extends IApiResponse {
    data: {
        mainHeader: null,
        mainConsultation: null,
        logo: string,
        services: IServiceData[],
        samples: ISampleData[],
        events: [],
        experiences: []
    }
}