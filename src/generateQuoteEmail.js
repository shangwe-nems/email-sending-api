const Mailgen = require("mailgen");

const generateQuoteEmail = (data) => {
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
      title: `<p style="font-size: 20px; font-family: Bahnschrift; font-weight: 400; color: #000000;">Le client ${data.full_name} vous a fait une demande de quotation à partir de votre siteweb: </p>`,
      greeting: false,
      signature: false,
      intro: [
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Vous pouvez trouver les informations y afférentes ci-dessous :</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Nom complet: ${data.full_name}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Email : ${data.email}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Téléphone : ${data.phone}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Ville : ${data.city}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Services : ${
          data.evaluation
            ? "Evaluation, "
            : data.installation
            ? "Installation, "
            : data.maintenance
            ? "Maintenance, "
            : data.livraison
            ? "Livraison, "
            : data.autre
            ? "Autres "
            : null
        }</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Urgence : ${data.urgency}</p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Description de la quotation : ${data.message}</p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};

const generateQuoteAutomaticResponse = (data) => {
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
      title: `<p style="font-size: 20px; font-family: Bahnschrift; font-weight: 400; color: #000000;">Dear ${
        data.full_name.split(" ")[0]
      },</p>`,
      greeting: false,
      signature: false,
      intro: [
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">
          Nous accusons reception de votre demande devis et vous en remercions. L’équipe qualifiée de Nyl Service examinera votre demande et vous contactera le cas écheant.
        </p>`,
        `<p style="font-size: 16px; font-family: Bahnschrift; font-weight: 400; color: #1a1a1a;">Bonne compréhension</p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};

module.exports = { generateQuoteAutomaticResponse, generateQuoteEmail };
