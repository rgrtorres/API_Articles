import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { INews } from "src/models/INews";
import { IConfig } from "src/models/IConfig";

@Injectable()
export class NewsService {
    private config: IConfig = {
        apiURL: "",
        key: "",
    };

    constructor(
        private readonly http: HttpClient
    ) {
        this.http.get<IConfig>('../assets/data/appconfig.json').subscribe(
            (data) => {
                this.config.apiURL = data.apiURL,
                this.config.key = data.key
            }
        )
    }

    getNews(subject: string) {
        return this.http.get<INews>(`${this.config.apiURL}/v2/everything?q=${subject}&apiKey=${this.config.key}`);
    }
}