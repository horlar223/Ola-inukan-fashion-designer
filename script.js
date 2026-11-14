// FASHION ORDER FORM - WHATSAPP CONNECTION

const fashionOrderForm = document.getElementById("fashionOrderForm");

if (fashionOrderForm) {

    fashionOrderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Customer Information
        const name = document.getElementById("customerName").value;
        const email = document.getElementById("customerEmail").value;
        const phone = document.getElementById("phone").value;
        const country = document.getElementById("country").value;
        const outfit = document.getElementById("outfit").value;
        const occasion = document.getElementById("occasion").value;
        const deliveryDate = document.getElementById("deliveryDate").value;
        const details = document.getElementById("details").value;

        // WhatsApp Message
        const message = `
NEW FASHION ORDER REQUEST

Customer Name: ${name}

Email Address: ${email}

Phone Number: ${phone}

Country: ${country}

Type of Outfit: ${outfit}

Occasion: ${occasion}

Preferred Delivery Date: ${deliveryDate || "Not specified"}

Additional Details: ${details || "None"}

Thank you for choosing Ola Inukan Fashion Designer.
        `;

        // Mother's WhatsApp Number
        const whatsappNumber = "2348084676837";

        // Open WhatsApp
        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}

// CONTACT FORM - WHATSAPP CONNECTION

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const whatsappMessage = `
NEW CUSTOMER ENQUIRY

Full Name: ${name}
Email Address: ${email}
Subject: ${subject}

Message:
${message}

Thank you for contacting Ola Inukan Fashion Designer.
        `;

        const whatsappNumber = "2348084676837";

        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;
    });
}

// HOMEPAGE ORDER FORM

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const email = document.getElementById("customerEmail").value;
        const phone = document.getElementById("phone").value;
        const country = document.getElementById("country").value;
        const outfit = document.getElementById("outfit").value;
        const measurements = document.getElementById("measurements").value;
        const details = document.getElementById("details").value;

        const image = document.getElementById("designImage").files[0];

        const message = `
NEW FASHION ORDER FROM HOMEPAGE

Customer Name: ${name}

Email: ${email}

WhatsApp Number: ${phone}

Country: ${country}

Outfit Type: ${outfit}

Measurements: ${measurements || "Not provided"}

Additional Information: ${details || "None"}

Design Image: ${image ? image.name : "No image selected"}

Please contact me about this order.

Thank you.
        `;

        const whatsappNumber = "2348084676837";

        const whatsappURL = "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;

    });

}