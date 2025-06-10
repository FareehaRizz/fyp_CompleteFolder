import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ioc-exchange",
  templateUrl: "./ioc-exchange.component.html",
  styleUrls: ["./ioc-exchange.component.scss"],
})
export class IocExchangeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  iocTypes: string[] = [
    "IP Address",
    "Domain",
    "Hash (SHA256)",
    "URL",
    "Email Address",
    "File Path",
  ];
  title: string;

  newIOC = {
    id: "",
    submittedBy: "",
    threatName: "",
    ipfsHash: "",
  };

  queryTerm = "";
  filters = {
    threatActor: "",
    status: "",
  };

  queryResults: any[] = [];

  // Mock function: replace with your service logic
  async onShareIOC() {
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newIOC),
      });

      if (!response.ok) {
        const error = await response.json();
        alert("Failed to submit IOC: " + error.message);
        return;
      }

      const result = await response.json();
      alert("IOC submitted to blockchain!");
      this.newIOC = {
        id: "",
        submittedBy: "",
        threatName: "",
        ipfsHash: "",
      };
      //   this.fetchIOCs(); // Optional: refresh list
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred while submitting the IOC.");
    }
  }

  // Mock function: replace with your query logic
  onQueryIOC() {
    console.log("Querying with:", this.queryTerm, this.filters);

    // Simulated response
    this.queryResults = [
      {
        type: "Domain",
        value: "malicious-domain.com",
        threatActor: "Lazarus Group",
        status: "validated",
        lastSeen: "2025-01-15",
      },
    ];
  }
  onFileChange($event) {}
}
