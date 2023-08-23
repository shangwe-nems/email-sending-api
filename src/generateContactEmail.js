import Mailgen from "mailgen";

export const generateContactEmail = (data) => {
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

export const generateContactAutomaticResponse = (data) => {
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
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">
          Nous vous remercions de l’intérêt accordé à notre entreprise et du temps pour la formulation de votre message.
        </p>`,
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">
          Sachez que ce dernier a été bien reçu et nous rentrerons en contact avec vous dans les plus brefs délais.
        </p>`,
        `<p style="font-size: 16px; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">
          Bien cordialement,       
        </p>`,
      ],
    },
  };

  const mail = MailGenerator.generate(response);

  return mail;
};
