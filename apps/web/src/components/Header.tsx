import { ActiveSessionResource } from "@clerk/types";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";

import Head from "next/head";

export function Header({
  open,
  setOpen,
  session,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  session: ActiveSessionResource | null | undefined;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="theme-color" content="#4f46e5" />
      </Head>
      <MobileNavigation open={open} session={session} setOpen={setOpen} />

      <header className="relative overflow-hidden">
        <DesktopNavigation setOpen={setOpen} />
        {children}
      </header>
    </>
  );
}
