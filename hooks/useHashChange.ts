import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useHashChange = () => {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      const hashIndex = url.indexOf("#");
      if (hashIndex !== -1) {
        const hash = url.substring(hashIndex + 1);
        setActiveSection(hash);
      } else {
        setActiveSection("");
      }
    };

    handleRouteChange(router.asPath);

    const handleHashChange = (url: any) => handleRouteChange(url);
    router.events.on("hashChangeComplete", handleHashChange);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("hashChangeComplete", handleHashChange);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);  

  return activeSection;
};

export default useHashChange;
