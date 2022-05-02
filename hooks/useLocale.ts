import { useRouter } from "next/router";

function useLocale() {
  const router = useRouter();

  const locale = router.locale;

  return locale;
}

export default useLocale;
