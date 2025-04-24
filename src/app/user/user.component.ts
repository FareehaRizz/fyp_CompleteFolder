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
    userAbout: "",
  };

  ngOnInit(): void {
    fetch("http://localhost:5000/auth/userprofile", {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.msg || "Failed to fetch profile");
        const name = data.name || "";
        const nameParts = name.trim().split(" ");
        this.user.firstName = nameParts[0] || "";
        this.user.lastName = nameParts.slice(1).join(" ") || "";
        this.user.email = data.email;
        this.user.organization = data.organization;
        this.user.address = data.address;
        this.user.city = data.city;
        this.user.country = data.country;
        this.user.postalCode = data.postalCode;
        this.user.userAbout = data.aboutUser;
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }

  updateProfile() {
    const userData = {
      name: `${this.user.firstName} ${this.user.lastName}`,
      email: this.user.email,
      organization: this.user.organization,
      address: this.user.address,
      city: this.user.city,
      country: this.user.country,
      postalCode: this.user.postalCode,
      aboutUser: this.user.userAbout,
    };
    fetch("http://localhost:5000/auth/updateuserprofile", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.msg || "Update failed");
        }
        console.log("Profile updated:", data);
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  }
}
