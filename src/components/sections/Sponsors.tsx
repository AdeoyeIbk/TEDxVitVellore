import microsoftLogo from "../../assets/images/microsoft-logo-png-server-logo-png-img-1000-500-free-transparent-microsoft-900x460-removebg-preview.png";
import googleLogo from "../../assets/images/google-logo-transparent-hd-png-download.png";
import intelLogo from "../../assets/images/intel-logo-png-11.png";
import ibmLogo from "../../assets/images/ibm_logo.png";
import amazonLogo from "../../assets/images/amazon_logo.png";
import merckLogo from "../../assets/images/merck_logo.png";
import astraZenecaLogo from "../../assets/images/astrazeneka_logo.png";
import rocheLogo from "../../assets/images/roche_logo.png";
import gskLogo from "../../assets/images/gsk_logo.png";
import iqviaLogo from "../../assets/images/iqvia_logo.png";
import accentureLogo from "../../assets/images/accenture-logo.png";
import deloitteLogo from "../../assets/images/deloitte_logo.png";
import pwcLogo from "../../assets/images/pwc_logo.png";
import cognizantLogo from "../../assets/images/cognizant_logo.png";
import mckinseyLogo from "../../assets/images/mckinsey_logo.png";

export default function Sponsors() {
  const sponsors = [
    {
      company: "Microsoft",
      image: microsoftLogo,
    },
    {
      company: "Google",
      image: googleLogo,
    },
    {
      company: "Intel",
      image: intelLogo,
    },
    {
      company: "IBM",
      image: ibmLogo,
    },
    {
      company: "Amazon",
      image: amazonLogo,
    },
    {
      company: "Merck",
      image: merckLogo,
    },
    {
      company: "AstraZeneca",
      image: astraZenecaLogo,
    },
    {
      company: "Roche",
      image: rocheLogo,
    },
    {
      company: "gsk",
      image: gskLogo,
    },
    {
      company: "IQVIA",
      image: iqviaLogo,
    },
    {
      company: "accenture",
      image: accentureLogo,
    },
    {
      company: "Deloitte",
      image: deloitteLogo,
    },
    {
      company: "pwc",
      image: pwcLogo,
    },
    {
      company: "Cognizant",
      image: cognizantLogo,
    },
    {
      company: "McKinsey & Company",
      image: mckinseyLogo,
    },
  ];

  return (
    <section className="flex flex-col gap-16 my-24 px-24 sm:px-8 lg:px-12 items-center">
      <h2 className="text-2xl    sm:text-3xl lg:text-4xl font-bold text-center">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-x-24 gap-y-12 sm:gap-8 lg:gap-16 justify-items-center items-center">
        {sponsors.map(({ image, company }) => (
          <img
            key={company}
            src={image}
            alt={company}
            className="w-24 h-16 sm:w-28 sm:h-20 lg:w-32 lg:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
