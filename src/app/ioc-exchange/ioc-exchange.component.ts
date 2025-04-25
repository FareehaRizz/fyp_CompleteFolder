import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ioc-exchange',
  templateUrl: './ioc-exchange.component.html',
  styleUrls: ['./ioc-exchange.component.scss']
})
export class IocExchangeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}
  iocTypes: string[] = ['IP Address', 'Domain', 'Hash (SHA256)', 'URL', 'Email Address', 'File Path'];

  newIOC = {
    type: '',
    value: '',
    description: ''
  };

  queryTerm = '';
  filters = {
    threatActor: '',
    status: ''
  };

  queryResults: any[] = [];

  // Mock function: replace with your service logic
  onShareIOC() {
    console.log('Sharing IOC to blockchain:', this.newIOC);
    // Connect to your smart contract or API here
    alert('IOC submitted to blockchain!');
    this.newIOC = { type: '', value: '', description: '' };
  }

  // Mock function: replace with your query logic
  onQueryIOC() {
    console.log('Querying with:', this.queryTerm, this.filters);

    // Simulated response
    this.queryResults = [
      {
        type: 'Domain',
        value: 'malicious-domain.com',
        threatActor: 'Lazarus Group',
        status: 'validated',
        lastSeen: '2025-01-15'
      }
    ];
  }
  

}
