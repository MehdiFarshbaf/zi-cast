import { HTMLProps } from "react";

export interface IClassName {
    className?: HTMLProps<HTMLElement>['className']
}

export interface IApiResponse {
    success: boolean,
    message: string
}

export interface ID {
    id: number
}