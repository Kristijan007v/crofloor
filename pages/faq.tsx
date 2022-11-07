import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/dist/client/router";
import Navigation from "../components/Navigation/Navigation";
import PrivacySection from "../components/PrivacySection/PrivacySection";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18nextConfig from "../next-i18next.config";
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "Custom404",
        "faq",
      ])),
      nextI18nextConfig,
    },
  };
}

const content = [
  {
    id: "1",
    heading: "Što su troslojni gotovi parketi?",
    text: "Troslojni parketi su vrsta gotovih parketa koja se sastoji od tri sloja. Slojevi su međusobno unakrsno slijepljeni ljepilom. Gornji sloj, tzv. pokrovna lamela, načinjena je od tvrde vrste drva (npr. hrast) u debljini 4 ili 5 mm, dok srednji i donji sloj čini meka ili tvrda vrsta drva. Površina parketa (gornji sloj – pokrovna lamela) je strojno obrađena – lakirana ili nauljena. Iz našeg asortimana u troslojne gotove parkete spadaju MORELLO OTTIMO i MORELLO RICCO. To su drveni podovi većih formata, koji se nazivaju i troslojnim seljačkim podovima.",
  },
  {
    id: "2",
    heading: "Kakva je razlika između dvoslojnog i troslojnog parketa?",
    text: "Troslojnom parketu je, u odnosu na dvoslojni, dodani još jedan – treći sloj, koji ima dodatnu stabilizirajuću funkciju. Naime, da bi daske drvenog poda u većim formatima (širine od 150 mm naviše) bile dovoljno čvrste i stabilne, poželjno je da budu načinjene od 3 sloja tj. proizvedene u obliku troslojnog parketa. Dvoslojni parket proizvodi se uobičajeno u manjim formatima u kojima je dvoslojna konstrukcija dovoljno stabilna.",
  },
  {
    id: "3",
    heading: "Jesu li bolji višeslojni ili masivni marketi?",
    text: "Gotovi višeslojni parketi predstavljaju novu generaciju parketa, čija su svojstva znatno unaprijeđena u odnosu na masivne parkete. Zahvaljujući svojem višeslojnom sastavu i međusobnom „umirujućem“ djelovanju različitih vrsta drva, višeslojni parketi u manjoj mjeri reagiraju na utjecaj različitih nepovoljnih faktora iz okoline, kao što je neodgovarajuća vlaga u podlozi ili u zraku. Višeslojni parketi duže zadržavaju svoj prvobitni izgled, ne isušuju se i ne stvaraju fuge brzo kao masivni parketi. Višeslojni sastav također omogućava izvedbu parketa u velikim dimenzijama, u kojima masivni parketi pokazuju izrazitu nestabilnost. Za razliku od masivnih parketa, višeslojni parketi mogu se polagati na podloge s ugrađenim podnim grijanjem, a njihova je postava brza, čista i jeftinija. Najčešća zabluda laika je mišljenje da su masivni parketi tvrđi i otporniji od višeslojnih parketa te da se mogu više puta reparirati, jer su deblji i načinjeni od jednog komada drva. Međutim, sve ove tvrdnje mogu se lako demantirati slijedećim činjenicama temeljnim na znanstvenim i tehničkim pokusima iz prakse: • tvrdoća drva debljine 3-4 mm identična je tvrdoći drva debljine 20 mm • otpornost parketa uglavnom ovisi o dva faktora: tvrdoći drva od kojega je parket načinjen i vrsti površinskog premaza • masivni parket se ne može reparirati više puta od višeslojnog parketa (2-3 puta), obzirom da bi inače došlo do popuštanja spoja između parketnih dasaka (utora i pera). Superiornost višeslojnih parketa nad ostalim vrstama parketa dokazuje podatak da u Europi 80% ukupno položenih parketnih površina čine upravo gotovi višeslojni parketi, u čemu prednjače upravo razvijenija tržišta zapadno-europskih zemalja.",
  },
  {
    id: "4",
    heading:
      "Da li se gotovi višeslojni parketi mogu polagati na podno grijanje?",
    text: "Gotovi višeslojni parketi jedina su vrsta parketa koja je preporučljiva za postavu na podloge sa ugrađenim podnim grijanjem, budući da, zahvaljujući svojoj višeslojnoj strukturi, imaju sposobnost dobrog provođenja topline. Prilikom postave parketa na podno grijanje potrebno je pridržavati se pravila posebnog protokola, koja su poznata profesionalnom parketaru. Da bi parket na podnom grijanju i nakon dužeg vremena zadržao svoja prvobitna svojstva i izgled, važno je ne prelaziti maksimalnu dopuštenu temperaturu podnoga grijanja. Temperatura na površini parketa nikad ne bi smjela iznositi više od 24 C, što odgovara uobičajenoj sobnoj temperaturi zraka u prostoriji. Reakcija drva na neprimjereno korištenje podnoga grijanja može se očitovati u nastajanju većih fuga između parketnih dasaka te uzdužno i/ili poprečno pucanje pokrovne lamele.",
  },
  {
    id: "5",
    heading:
      "Zbog čega parket od iste vrste drveta ponekad ima drugačiju boju?",
    text: "Drvo je, kao prirodni materijal, podložno promjenama pod različitim utjecajima iz okoline. Svaka vrsta drva je tako podložna i promjeni boje, koja je rezultat njegove oksidacije uslijed utjecaja svjetla. Tamnije vrste drva u pravilu poprimaju svjetliji ton, dok svjetlije vrste drva potamne. Međutim, postoje i izuzeci od ovog pravila. Promjena boje posebno je izražena kod nekih egzotičnih vrsta drva. Općenito govoreći, koliko je promjena boje izražena ovisi o pojedinoj vrsti drva, količini svjetlosti te duljini izloženosti svjetlu. Važno je istaknuti da proizvođač parketa ne može utjecati na ovu prirodnu pojavu. Poželjno je da periodično razmještate namještaj i tepihe u Vašem domu kako bi utjecaj svjetla, a time i promjena boje Vašega parketa, bili što ravnomjerniji. Boja parketa varira i s obzirom na ponuđena sortiranja. Dok je u prvoj skupini raspon boja manji tj. ujednačen, u trećoj skupini taj je raspon znatno širi i boje su šarolikije. Naposljetku, veliki utjecaj na finalnu boju drva ima i vrsta površinske obrade. Tako lakirani parket može imati različiti ton boje od nauljenog parketa, iako su oba sačinjena od iste vrste drva. Preporučujemo da svakako posjetite Vama najbliži salon POŽGAJ GRUPE (Zagreb, Split, Varaždin) gdje ćete na izloženim uzorcima parketa moći pogledati većinu ponuđenih vrsta drva, sortiranja i površinskih obrada parketa.",
  },
  {
    id: "6",
    heading:
      "Zašto bih, između mnoštva gotovih parketa na tržištu, izabrao/izabrala upravo brend Pavone, Morello ili Castoro?",
    text: "Da li ste znali da su PAVONE, MORELLO i CASTORO prvi hrvatski brandovi parketa? I ne samo to, naši brandovi prepoznati su na najzahtjevnijim zapadno-europskim i svjetskim tržištima. Svoj tržišni uspjeh naši proizvodi prvenstveno zahvaljuju svojoj visokoj kvaliteti i atraktivnosti. Naša kolekcija parketa pomno je osmišljena od strane stručnog osoblja te prati najnovije europske i svjetske trendove. U izradi parketa koristimo samo najkvalitetnije materijale, a proizvodnja se odvija u kontroliranim uvjetima. U sklopu POŽGAJ GRUPE nalazi se najstarija i najveća hrvatska tvornica višeslojnih parketa s početkom djelovanja 2001. godine, što govori u prilog našem iskustvu i tradiciji. Svaka parketna daska naših parketa stvorena je da traje i zbog toga su naši parketi među rijetkima uz koje dobivate dugogodišnju garanciju. To znači da smo sigurni u kvalitetu svojih proizvoda i da spremno garantiramo za njihov životni vijek i vaše potpuno zadovoljstvo. Mnoštvo su svojih domaćih i inozemnih klijenata pridobili upravo dobrim odnosom cijene i kvalitete, po čemu smo prepoznati na tržištu. Osim kvaliteti proizvoda, veliku pažnju posvećujemo i kvaliteti usluge koju pruža naše stručno prodajno osoblje – od prvog kontakta i odabira parketa do post-kupovnih savjeta i pomoći. Svjesni smo da proces prodaje ne završava fizičkom primopredajom proizvoda, već samo na raspolaganju kupcu tijekom čitavog životnog vijeka naših parketa.",
  },
  {
    heading: "",
    text: "",
  },
];

const contentEn = [
  {
    id: "1",
    heading: "What are three-layer parquets?",
    text: "As the name says these parquets consist of three cross-glued layers. While the bottom and middle layer can be made of soft or hard wood, the top layer is made of hard wood (e.g., Oak) with thickness of 4 or 5 mm. The surface of the parquet (top layer) is machined – varnished or oiled. Our selection of three-layer parquets includes MORELLO OTTIMO and MORELLO RICCO. These are wooden floors of larger formats. ",
  },
  {
    id: "2",
    heading:
      "What is the difference between two-layer and three-layer parquet?",
    text: "Compared to two-layer parquet, another layer has been added to three-layer parquet, which has an additional stabilizing function. For the wooden floorboards of larger formats to be sufficiently strong and stable, it is desirable that they be made of 3 layers. Two-layer parquets are standardly manufactured in smaller formats in which the two-layer structure is sufficiently stable.",
  },
  {
    id: "3",
    heading: "Are multi-layered or massive parquets better?",
    text: "Multi-layered parquets represent the new generation of parquets, whose characteristics have been significantly improved, compared to massive parquets. Due to their multi-layer composition and the “calming” effect of different types of wood, multi-layer parquets are less responsive to the influence of various unfavourable environmental factors, such as inadequate moisture in air or substrate. Multi-layer parquets retain their original appearance longer, they do not dry out and they do not create joints as quickly as massive parquets. Compared to massive parquets, multi-layer parquets can be laid on substrates with built-in underfloor heating. Their installation is fast, clean, and cheaper. The most common misconception is belief that, because they are thicker and made of one piece of wood, massive parquets are harder and more resistant than multi-layer parquets and that they can be repaired multiple times. However, these claims can be easily retracted by the following facts based on scientific and technical experiments in practice: •	The hardness of wood with 3-4 mm thickness is identical to the hardness of 20 mm thick wood •	The resistance of parquet mainly depends on two factors: the hardness of the wood from which it’s made and the type of surface coating •	Massive parquets cannot be repaired multiple times because the joint between the parquet boards would loosen The superiority of multi-layer parquets over other types of parquets is proven by the fact that 80% of total laid parquets in Europe are multi-layer parquets.",
  },
  {
    id: "4",
    heading: "Can multi-layer parquets be laid on underfloor heating?",
    text: "Multi-layer parquets are the only type of parquet recommended for installation on substrates with built-in underfloor heating, since, thanks to their multi-layer structure, they can conduct heat well. For parquet on underfloor heating to retain its original characteristics and appearance even after a long time, it is important not to exceed the maximum allowable temperature of underfloor heating. the temperature on the surface should never exceed 24	 degrees Celsius. The reaction of wood to inappropriate use of underfloor heating can result in formation of larger joints between parquet boards and longitudinal and/or transverse cracking of the top layer.",
  },
  {
    id: "5",
    heading:
      "Why do parquets of the same type of wood sometimes have a different look?",
    text: "Wood, as a natural material, is subject to changes under environmental conditions. Each type of wood is thus also subject to discoloration, which is the result of its oxidation due to the influence of light. Darker types of wood tend to take on a lighter tone, while the lighter types of wood darken. However, there are exceptions to this tule. The change in colour is especially seen in some exotic types of wood. Generally, the change in colour depends on the type of wood, the amount of sunlight and the length of exposure to light. It is important to point to that the manufacturer can not influence this natural phenomenon. It is advisable to periodically rearrange the furniture and carpets so that the effect of light, and the colour change of the parquet is as even as possible. The colour of the parquet also varies depending on offered sorting. the range of colours in the first group is smaller and more uniform while the colours of the third group are more diverse and the range of colours is wider. Finally, the type of surface treatment is also important for the colour of the parquet. Thus, varnished, and oiled parquets can differ in colours, although they are made of the same type of wood. We recommend that you visit the nearest POŽGAJ GROUP salon (Zagreb, Split, Varaždin) as there, on the exhibited samples, you will be able to see most of the offered types of wood, sorting and surface treatment of parquets.",
  },
  {
    id: "6",
    heading: "Why would I choose Pavone, Morello or Castoro brand?",
    text: "Did you know that Pavone, Morello and Castoro are the first Croatian parquet brands? And what is more, our brands are recognized in the most demanding Western European and world markets. Our products primarily owe their market success to their high quality and attractiveness. Our parquet collection is carefully designed by professional staff and follows the latest European and world trends. We use only the highest quality materials in the production, which takes place in controlled conditions. Within the POŽGAJ GROUP, there is the oldest and the largest Croatian multi-layer parquet factory, it began with operating in 2001, which speaks in favour of our experience and tradition. Every parquet board is created to last which is why you get a long-term guarantee. This means that we are confident in the quality of our products and ready to guarantee their lifespan and your complete satisfaction. With their good price-quality ratio, our parquets have won over many locals and foreign clients. In addition to product quality, we pay great attention to the quality of service provided by our professional sales staff – from the first contact and parquet selection to post-purchase advice and assistance.",
  },
  {
    heading: "",
    text: "",
  },
];

export default function Faq() {
  const { t } = useTranslation("faq");

  const router = useRouter();

  const locale = router.locale;

  return (
    <>
      <Skeleton
        title="Terms & Conditions"
        metaDescription="Često postavljena pitanja."
      >
        <Navigation style="bg-black" />
        <SectionHeading heading={t("heading")} />
        <div className="m-auto mt-10 flex w-full flex-col space-y-12 pt-10 pr-10 pl-10 pb-20 md:w-5/6 lg:w-4/6 lg:pt-12 lg:pr-12 lg:pl-12 lg:pb-28">
          {locale === "en" &&
            contentEn.map((item, index) => (
              <PrivacySection
                id={item.id}
                key={index}
                heading={item.heading}
                text={item.text}
              />
            ))}
          {locale != "en" &&
            content.map((item, index) => (
              <PrivacySection
                id={item.id}
                key={index}
                heading={item.heading}
                text={item.text}
              />
            ))}
        </div>
      </Skeleton>
    </>
  );
}
