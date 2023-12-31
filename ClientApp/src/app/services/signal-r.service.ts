import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ChartModel } from '../_interfaces/chartmodel.model';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  public data: ChartModel[] = [];

  private hubConnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chats')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection established...'))
      .catch((err) => console.log('Error while starting the connection.', err));
  };

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log('DATA RECEIVED: ', data);
    });
  };

  constructor() {}
}
