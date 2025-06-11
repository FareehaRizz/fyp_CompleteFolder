// // import { Component, OnInit } from "@angular/core";

// // @Component({
// //   selector: "app-ioc-exchange",
// //   templateUrl: "./ioc-exchange.component.html",
// //   styleUrls: ["./ioc-exchange.component.scss"],
// // })
// // export class IocExchangeComponent implements OnInit {
// //   constructor() {}
// //   ngOnInit(): void {}
// //   iocTypes: string[] = [
// //     "IP Address",
// //     "Domain",
// //     "Hash (SHA256)",
// //     "URL",
// //     "Email Address",
// //     "File Path",
// //   ];
// //   title: string;

// //   newIOC = {
// //     id: "",
// //     submittedBy: "",
// //     threatName: "",
// //     ipfsHash: "",
// //   };

// //   queryTerm = "";
// //   filters = {
// //     threatActor: "",
// //     status: "",
// //   };

// //   queryResults: any[] = [];

// //   // Mock function: replace with your service logic
// //   async onShareIOC() {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/submit", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(this.newIOC),
// //       });

// //       if (!response.ok) {
// //         const error = await response.json();
// //         alert("Failed to submit IOC: " + error.message);
// //         return;
// //       }

// //       const result = await response.json();
// //       alert("IOC submitted to blockchain!");
// //       this.newIOC = {
// //         id: "",
// //         submittedBy: "",
// //         threatName: "",
// //         ipfsHash: "",
// //       };
// //       //   this.fetchIOCs(); // Optional: refresh list
// //     } catch (err) {
// //       console.error("Submission error:", err);
// //       alert("An error occurred while submitting the IOC.");
// //     }
// //   }

// //   // Mock function: replace with your query logic
// //   onQueryIOC() {
// //     console.log("Querying with:", this.queryTerm, this.filters);

// //     // Simulated response
// //     this.queryResults = [
// //       {
// //         type: "Domain",
// //         value: "malicious-domain.com",
// //         threatActor: "Lazarus Group",
// //         status: "validated",
// //         lastSeen: "2025-01-15",
// //       },
// //     ];
// //   }
// //   onFileChange($event) {}
// // }

// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-ioc-exchange",
//   templateUrl: "./ioc-exchange.component.html",
//   styleUrls: ["./ioc-exchange.component.scss"],
// })
// export class IocExchangeComponent implements OnInit {
//   constructor() {}
//   ngOnInit(): void {}

//   iocTypes: string[] = [
//     "IP Address",
//     "Domain",
//     "Hash (SHA256)",
//     "URL",
//     "Email Address",
//     "File Path",
//   ];
//   title: string;

//   newIOC = {
//     id: "",
//     submittedBy: "",
//     threatName: "",
//     ipfsHash: "",
//   };

//   queryTerm = "";
//   filters = {
//     threatActor: "",
//     status: "",
//   };

//   queryResults: any[] = [];

//   // ========== Existing SHARE logic ========== //
//   async onShareIOC() {
//     try {
//       const response = await fetch("http://localhost:5000/api/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(this.newIOC),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         alert("Failed to submit IOC: " + error.message);
//         return;
//       }

//       const result = await response.json();
//       alert("IOC submitted to blockchain!");
//       this.newIOC = {
//         id: "",
//         submittedBy: "",
//         threatName: "",
//         ipfsHash: "",
//       };
//     } catch (err) {
//       console.error("Submission error:", err);
//       alert("An error occurred while submitting the IOC.");
//     }
//   }

//   // ========== New QUERY BY ID logic ========== //
//   iocId: string = "";
//   iocResult: any = null;
//   error: string = "";

//   async onQueryById() {
//     this.iocResult = null;
//     this.error = "";

//     if (!this.iocId.trim()) {
//       this.error = "IOC ID is required";
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/iocs/${this.iocId}`
//       );
//       if (!response.ok) {
//         const err = await response.json();
//         this.error = err.details || err.message;
//         return;
//       }

//       this.iocResult = await response.json();
//     } catch (err) {
//       console.error(err);
//       this.error = "An error occurred while fetching the IOC.";
//     }
//   }

//   // Placeholder mock query function
//   onQueryIOC() {
//     console.log("Querying with:", this.queryTerm, this.filters);

//     this.queryResults = [
//       {
//         type: "Domain",
//         value: "malicious-domain.com",
//         threatActor: "Lazarus Group",
//         status: "validated",
//         lastSeen: "2025-01-15",
//       },
//     ];
//   }

//   onFileChange($event: any) {}
// }

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
    reporter: "",
    details: "",
    ipfsHash: "",
  };

  queryTerm = "";
  filters = {
    threatActor: "",
    status: "",
  };

  queryResults: any[] = [];

  // ========== SHARE IOC logic ========== //
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
        reporter: "",
        details: "",
        ipfsHash: "",
      };
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred while submitting the IOC.");
    }
  }

  // ========== QUERY BY ID logic ========== //
  iocId: string = "";
  iocResult: any = null;
  error: string = "";

  async onQueryById() {
    this.iocResult = null;
    this.error = "";

    if (!this.iocId.trim()) {
      this.error = "IOC ID is required";
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/iocs/${this.iocId}`
      );
      if (!response.ok) {
        const err = await response.json();
        this.error = err.details || err.message;
        return;
      }

      this.iocResult = await response.json();
    } catch (err) {
      console.error(err);
      this.error = "An error occurred while fetching the IOC.";
    }
  }

  // ========== VALIDATE IOC logic ========== //
  validateId: string = "";
  validatorName: string = "";
  validateMessage: string = "";
  validateError: string = "";

  async onValidateIOC() {
    this.validateMessage = "";
    this.validateError = "";

    if (!this.validateId.trim() || !this.validatorName.trim()) {
      this.validateError = "Both ID and Validator name are required";
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/iocs/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.validateId,
          validator: this.validatorName,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        this.validateError = err.details || err.message;
        return;
      }

      const result = await response.json();
      this.validateMessage = result.message || "IOC validated successfully";
      this.validateId = "";
      this.validatorName = "";
    } catch (err) {
      console.error("Validation error:", err);
      this.validateError = "An error occurred during IOC validation.";
    }
  }

  onQueryIOC() {
    console.log("Querying with:", this.queryTerm, this.filters);
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

  onFileChange($event: any) {}
}
