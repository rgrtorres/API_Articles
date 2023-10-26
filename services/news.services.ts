import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { INews } from "src/models/INews";

@Injectable()
export class NewsService {
    private key: string = "---";

    constructor(
        private readonly http: HttpClient
    ) { }

    getNews(subject: string) {
        return this.http.get<INews>(`https://newsapi.org/v2/everything?q=${subject}&apiKey=${this.key}`);
    }
}