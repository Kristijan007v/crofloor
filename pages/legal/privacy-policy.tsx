import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/Navigation/Navigation";
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

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy-policy");

  return (
    <>
      <Skeleton title="" metaDescription="">
        <Navigation style="bg-black" />
        <SectionHeading heading={t("heading")} />
        <div className="p-10 lg:p-12">
          <p className="paragraph p__responsive m-auto w-full md:w-5/6 lg:w-4/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            iste dolores omnis unde, impedit nulla ab odit temporibus asperiores
            enim, molestias quaerat quo ex beatae delectus commodi quia vel amet
            corrupti adipisci dicta id et. Modi aperiam, ad, officia, debitis
            vel nobis ex quaerat laboriosam dolores ratione odit? Eius sequi
            quaerat dolor, nihil dignissimos laborum unde quis odit quam animi
            cumque ad recusandae provident distinctio eveniet sunt perferendis
            deleniti minima est! Totam dicta aperiam blanditiis dolorum odio
            facilis, tempore laudantium magnam cumque fugit aspernatur minima
            perspiciatis temporibus deleniti vero doloribus repellendus tenetur,
            rerum inventore fuga iusto. Sapiente facilis, aliquam tempora, dolor
            voluptatibus repellendus quidem beatae, deserunt nam ratione a.
            Quisquam, impedit tempora quos vitae voluptas error fugiat eveniet
            laborum eos omnis aspernatur, pariatur quod totam aliquam
            distinctio. Libero facilis ipsam, suscipit natus qui ut quaerat
            excepturi error officiis aperiam, minima maiores, velit pariatur ab
            porro ex laudantium aut quia voluptates. Amet impedit quod
            recusandae molestiae cumque nisi sapiente, quas rem accusamus maxime
            dolorem tenetur maiores! Omnis tempore non facere exercitationem
            temporibus. Et ullam eaque debitis maxime. Nostrum aspernatur
            molestias corporis doloremque repellat. Corrupti dolorum saepe,
            molestias repellendus voluptates hic velit iste autem quidem! Enim
            numquam quisquam corporis. Eius, dicta voluptate!
          </p>
        </div>
      </Skeleton>
    </>
  );
}
