import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'IOC Type', 'Indicator', 'Threat Actor', 'Validation Status', 'Last Seen' ],
          dataRows: [
              ['1', 'IP Address', '192.168.1.1', 'APT29', 'Validated', '2025-01-01'],
              ['2', 'Domain', 'malicious-domain.com', 'Lazarus Group', 'Validated', '2025-01-15'],
              ['3', 'Hash (SHA256)', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'Unknown', 'Validated', '2025-01-12'],
              ['4', 'URL', 'http://malicious-site.com/phishing', 'Fancy Bear', 'Pending Validation', '2025-01-18'],
              ['5', 'Email Address', 'attacker@phishmail.com', 'Unknown', 'Validated', '2025-01-20'],
              ['6', 'File Path', '/tmp/malicious_script.sh', 'APT41', 'Validated', '2025-01-22'],
              
          ]
      };
      
    
      this.tableData2 = {
          headerRow: [ 'ID', 'IOC Type',  'Indicator', 'Threat Actor', 'Validation Status', 'Last Seen' ],
          dataRows: [
              ['1', 'IP Address','192.168.1.2', 'APT30', 'validated','2024-02-02' ],
              ['2', 'Domain', 'malicious-domain.com', 'Lazarus Group', 'validated', '2025-03-03'],
              ['3', 'Hash (SHA256)', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'unknown', 'validated' ,'2025-04-04'],
              ['4', 'URL', 'http://malicious-site.com/phishing', 'Fancy Bear', 'pending validation','2025-05-05' ],
              ['5', 'Emain Address', 'attacker@phishmail.com', 'unknown', 'validated','2025-06-06' ],
              ['6', 'File Path', '/tmp/malicious_script.sh', 'APT42', 'validated','2025-07-07' ]
          ]
      };
  }

}
