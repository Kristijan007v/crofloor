import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/Navigation/Navigation";
import PrivacySection from "../../components/PrivacySection/PrivacySection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Skeleton from "../../components/Skeleton/Skeleton";
import nextI18nextConfig from "../../next-i18next.config";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "Custom404",
        "privacy-policy",
      ])),
      nextI18nextConfig,
    },
  };
}

const content = [
  {
    heading:
      "Politika privatnosti podataka u okviru Požgaj Grupe i povezanih društava",
    text: "Mi u Požgaj Grupi, zajedno sa svim povezanim društvima poštujemo Vašu privatnost. Naša Politika privatnosti odnosi se na sve kandidate za posao, naše suradnike, kupce, korisnike i posjetitelje ovog web portala te predstavnike naših klijenata, a temeljena je na odredbama Opće uredbe o zaštiti podataka Europske unije (GDPR). Ovdje možete pronaći vrstu osobnih podataka koje prikupljamo, kako koristimo prikupljene informacije, s kime ih dijelimo te prava i izbor koji korisnici web portala imaju o načinu na koji koristimo podatke. Opisane su i mjere koje poduzimamo kako bi zaštitili sve prikupljene podatke te način na koji nas možete kontaktirati u vezi sa našom politikom privatnosti i zaštitom Vaših prava.",
  },
  {
    heading: "Podaci koje automatski prikupljamo",
    text: "Kada posjetite naš web portal, možemo automatski prikupiti određene podatke, kao što su IP adresa, karakteristike pretraživača, karakteristike uređaja, operativni sustav, jezične postavke, podatke o korištenju našeg web portala i druge statističke podatke o posjeti web portalu. Možemo povezati određene podatke koje smo prikupili automatski s drugim podacima kako bismo saznali, na primjer, da li ste otvorili e-poštu koju smo Vam poslali. Vaš preglednik nam može poslati obavijest o tome da li ste dozvolili primanje ili blokirali kolačiće. Pružatelji usluga aplikacija trećih strana, alata i dodataka na našem web portalu, kao što su alati za dijeljenje putem društvenih medija, također mogu koristiti automatizirana sredstva za prikupljanje podataka o vašim interakcijama s tim značajkama. Ove informacije se prikupljaju izravno od strane pružatelja usluga i podliježu pravilima privatnosti ili obavijesti tih usluga. U skladu s važećim zakonom, Požgaj Grupa nije odgovorna za tih politiku privatnosti tih pružatelja usluga.",
  },
  {
    heading: "Kako koristimo podatke koje prikupljamo",
    text: "Podatke koje prikupljamo možemo koristiti i na druge načine o kojima ćemo Vas obavijesti prije nego počnemo takve podatke prikupljati. Dodatno, na web portalu koristimo usluge trećih strana, kao što su Google Analytics i Adobe Omniture. Pružatelji tih usluga koriste tehnologiju kako bi nam pomogli u analizi načina korištenja našeg web portala. Podatci koje te treće strane prikupe (uključujući IP adresu) mogu biti ustupljeni trećim stranama na raspolaganje, kako bi, između ostalog, izvršili analizu korištenja Web portala.",
  },
  {
    heading: "Informacije koje dijelimo",
    text: "Osobne podatke koje smo prikupili ne dijelimo, osim na način kako je to opisano u ovoj Politici privatnosti ili u izdvojenim obavijestima u vezi s pojedinim aktivnostima. Vaše osobne podatke možemo podijeliti s povezanim društvima, ako ste kandidat za posao i ista imaju interes za zapošljavanje osoba Vašeg profila. Dodatno, Vaše osobne podatke možemo otkriti ukoliko smo na to obvezni po zakonu ili nalogu: sukladno nalogu pravosudnih tijela i kad vjerujemo da je otkrivanje podataka nužni kako bismo spriječili nastanak štete ili financijskog gubitka te u slučajevima istraživanja prijevare ili nezakonitih aktivnosti.",
  },
  {
    heading: "Vaša prava",
    text: "Nudimo Vam izbor o načinu na koji komuniciramo s vama i kako prikupljamo osobne podatke. Kako biste promijenili Vaše postavke i informacije, tražili uklanjanje s liste primatelja e-pošte, podnijeli zahtjev, molimo da nas kontaktirate na niže navedene adrese. Sukladno zakonu, možete zatražiti uvid u vaše osobne podatke ili zatražiti da ispravimo, izbrišemo ili blokiramo Vaše osobne podatke.",
  },
  {
    heading: "Kako štitimo osobne podatke",
    text: "Održavamo administrativnu, tehničku i fizičku zaštitu koja je stvorena kako bi zaštitila osobne podatke od nenamjernih, neovlaštenih i nezakonitih izmjena, otkrivanja, korištenja ili gubitaka.",
  },
  {
    heading: "Obavješćivanje o povredi osobnih podataka",
    text: "U slučaju povrede osobnih podataka obavijestit ćemo Vas i nadležno nadzorno tijelo  porukom e-pošte u roku 72 sata o razmjerima povrede, obuhvaćenim podacima, možebitnom utjecaju na naše poslovanje i našim planiranim mjerama za osiguranje podataka i ograničenje bilo kakvih štetnih učinaka po pojedince.",
  },
  {
    heading: "Vaša privola",
    text: "Korištenjem ovog web portala dajete privolu na ovu Politiku privatnosti.",
  },
  {
    heading: "Promjene naše politike privatnosti",
    text: "U slučaju promjena naše Politike privatnosti obavijestit ćemo Vas o tome na ovom web portalu i ažurirati datum izmjene politike privatnosti dolje kako slijedi. Ova politika privatnosti je zadnji put izmijenjena 7. svibnja 2020. godine.",
  },
  {
    heading: "Pravo na pritužbu nadležnom tijelu",
    text: "U bilo kojem trenutku možete poslati pritužbu nadzornom tijelu u vezi našeg skupljanja i obrade Vaših osobnih podataka. U Republici Hrvatskoj pritužbu možete podnijeti Agenciji za zaštitu osobnih podatka (AZOP).",
  },
  {
    heading: "Kontakt",
    text: "Ako imate pitanja ili komentar vezano za našu Politiku privatnosti podataka u okviru Požgaj grupe i povezanih društava ili želite promijeniti podatke koje imamo o Vama, molimo Vas da nas kontaktirate na: pozgaj@pozgaj.com.",
  },

  {
    heading: "",
    text: "",
  },
];

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy-policy");

  return (
    <>
      <Skeleton
        title="Privacy policy"
        metaDescription="Our Privacy Policy is available here and explains in detail what information we collect, how we use it and what we disclose to third parties."
      >
        <Navigation style="bg-black" />
        <SectionHeading heading={t("heading")} />
        <div className="m-auto mt-10 flex w-full flex-col space-y-12 pt-10 pr-10 pl-10 pb-20 md:w-5/6 lg:w-4/6 lg:pt-12 lg:pr-12 lg:pl-12 lg:pb-28">
          {content.map((item, index) => (
            <PrivacySection
              key={index}
              heading={item.heading}
              text={item.text}
            />
          ))}
          {/* <section className="flex flex-col space-y-4 text-left">
            <h2 className="h2__responsive font-semibold text-black">
              PODACI KOJE PRIKUPLJAMO
            </h2>
            <p className="paragraph p__responsive text-justify">
              Prikupljamo osobne podatke o Vama na različite načine, putem našeg
              web portala i društvenih mreža, putem prijava za zapošljavanje i
              osobnim kontaktima, putem telefona, kao i u komunikaciji s našim
              klijentima. Možemo prikupiti sljedeće osobne podatke:
              <ol>
                <li>
                  kontakt podaci (kao što su ime, adresa, OIB i telefonski broj)
                </li>
                <li>
                  geolokacijske podatke, s pojedinim osobitostima našeg web
                  portala
                </li>
                <li>
                  podatke koje nam dostavite o ljudima za koje želite da ih
                  kontaktiramo te
                </li>
                <li>
                  • ostale podatke koje nam dostavite putem anketa i kontakt
                  formulara na našem web portalu
                </li>
              </ol>
              Dodatno, ukoliko ste suradnik ili kandidat za posao, možemo
              skupljati sljedeće vrstu osobnih podataka:
              <ol className="flex flex-col space-y-2">
                <li>
                  kontakt podaci (kao što su ime, adresa, OIB i telefonski broj)
                </li>
                <li>
                  geolokacijske podatke, s pojedinim osobitostima našeg web
                  portala
                </li>
                <li>
                  podatke koje nam dostavite o ljudima za koje želite da ih
                  kontaktiramo te
                </li>
                <li>
                  • ostale podatke koje nam dostavite putem anketa i kontakt
                  formulara na našem web portalu
                </li>
              </ol>
            </p>
          </section> */}
        </div>
      </Skeleton>
    </>
  );
}
