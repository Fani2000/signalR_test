import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest() {
    this.http
      .get('https://localhost:5001/api/chart')
      .subscribe((res) => console.log(res));
  }
}
