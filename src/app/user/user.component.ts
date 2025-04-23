import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    about: "",
  };

  ngOnInit(): void {
    fetch("http://localhost:5000/auth/userprofile", {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (!res.ok) throw new Error(data.msg || "Failed to fetch profile");
        const name = data.name || "";
        const nameParts = name.trim().split(" ");
        this.user.firstName = nameParts[0] || "";
        this.user.lastName = nameParts.slice(1).join(" ") || "";
        this.user.email = data.email;
        this.user.organization = data.organization;
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }
}
