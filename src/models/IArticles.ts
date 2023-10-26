import { ISource } from "./ISource"

export interface IArticles {
    source: ISource,
    autor: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}