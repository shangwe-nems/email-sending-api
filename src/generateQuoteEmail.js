import Mailgen from "mailgen";

export const generateQuoteEmail = (data) => {
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
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">Vous pouvez trouver les informations y afférentes ci-dessous :</p>`,
      ],
      table: {
        data: [
          {
            description: "Nom complet :",
            valeur: data.full_name,
          },
          {
            descripion: "Adresse Email : ",
            valeur: data.email,
          },
          {
            description: "Numéro de téléphone :",
            valeur: data.phone,
          },
          {
            descripion: "Ville",
            valeur: data.city,
          },
          {
            descripion: "Evaluation :",
            valeur: data.evaluation ? "Oui" : "Non",
          },
          {
            descripion: "Installation : ",
            valeur: data.installation ? "Oui" : "Non",
          },
          {
            description: "Maintenance :",
            valeur: data.maintenance ? "Oui" : "Non",
          },
          {
            descripion: "Livraison :",
            valeur: data.livraison ? "Oui" : "Non",
          },
          {
            descripion: "Autre : ",
            valeur: data.autre ? "Oui" : "Non",
          },
          {
            description: "Urgence :",
            valeur: data.urgency,
          },
          {
            description: "Message",
            valeur: data.message,
          },
        ],
        columns: {
          // Optionally, customize the column widths
          customWidth: {
            description: "40%",
            valeur: "60%",
          },
        },
      },
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};

export const generateQuoteAutomaticResponse = (data) => {
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
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">
          Nous accusons reception de votre demande devis et vous en remercions. L’équipe qualifiée de Nyl Service examinera votre demande et vous contactera le cas écheant.
        </p>`,
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">Bonne compréhension</p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};
