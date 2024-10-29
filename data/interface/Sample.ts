import { ID } from "./publicInterface";

export interface ISample {
    name: string,
    slug: string,
    image: string,
    order: number,
    created_at: string,
    updated_at: string,
    meta_title: null|string,
    meta_tags: null|string,
    meta_description: null|string,
    alt: null|string,
    imageUrl: string
}

export interface ISampleData extends ISample, ID { }
