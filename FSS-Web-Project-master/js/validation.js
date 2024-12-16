// Validation Script: validation.js

document.addEventListener("DOMContentLoaded", () => {
    const vendorForm = document.querySelector("form");

    vendorForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const vendorName = document.querySelector("input[name='vendorName']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const phone = document.querySelector("input[name='phone']").value.trim();

        if (!vendorName) {
            alert("Vendor Name is required.");
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^\+?[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Vendor Registered Successfully!");
        vendorForm.reset();
    });
});
