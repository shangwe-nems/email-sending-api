const Mailgen = require("mailgen");

const generateContactEmail = (data) => {
  const MailGenerator = new Mailgen({
    theme: "",
    product: {
      name: "Nyl Services",
      link: "https://www.nylservices.com",
      logo: "https://nylservices.com/logo1.png",
      logoHeight: "64px",
      copyright: `<p style="font-size: 14px; font-family: Bahnschrift, sans-serif; font-weight: 400; color: #000000;">Copyright © ${new Date().getFullYear()} Nyl Services. All rights reserved.</p>`,
    },
  });

  const response = {
    body: {
      title: `<p style="font-size: 20px; font-family: Bahnschrift; font-weight: 400; color: #000000;">Le client ${data.full_name} vous a contacté à partir de votre siteweb: </p>`,
      greeting: false,
      signature: false,
      intro: [
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Nom complet: ${data.full_name}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Email : ${data.email}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Téléphone : ${data.phone}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Ville : ${data.city}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Message : ${data.message}</p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};

const generateContactAutomaticResponse = (data) => {
  const MailGenerator = new Mailgen({
    theme: "",
    product: {
      name: "Nyl Services",
      link: "https://www.nylservices.com",
      logo: "https://nylservices.com/logo1.png",
      logoHeight: "64px",
      copyright: `<p style="font-size: 14px; font-family: Bahnschrift, sans-serif; font-weight: 400; color: #000000;">Copyright © ${new Date().getFullYear()} Nyl Services. All rights reserved.</p>`,
    },
  });

  const response = {
    body: {
      title: `<p style="font-size: 20px; font-family: Bahnschrift; font-weight: 400; color: #000000;">Chèr(e) client(e) ${
        data.full_name.split(" ")[0]
      },</p>`,
      greeting: false,
      signature: false,
      intro: [
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">
          Nous vous remercions de l’intérêt accordé à notre entreprise et du temps pour la formulation de votre message.
        </p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">
          Sachez que ce dernier a été bien reçu et nous rentrerons en contact avec vous dans les plus brefs délais.
        </p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">
          Bien cordialement,       
        </p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};

module.exports = { generateContactEmail, generateContactAutomaticResponse };
