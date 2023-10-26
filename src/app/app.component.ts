import { Component, OnInit } from '@angular/core';
import { NewsService } from 'services/news.services';
import { IArticles } from 'src/models/IArticles';
import { INews } from 'src/models/INews';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'APIArticles';
    
    keyWord: string = "";

    constructor(private readonly newsService: NewsService) {

    }
    
    ngOnInit(): void {
        
    }

    lstNews: Array<IArticles> = []

    news(word: string) {
        return this.newsService.getNews(word).subscribe(
            data => {
                this.lstNews = data.articles as Array<IArticles>
            }
        )
    }
}
