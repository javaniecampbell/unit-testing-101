import { ActiveSessionResource } from "@clerk/types";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Hero } from "@/components/Hero";

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
      <MobileNavigation open={open} session={session} setOpen={setOpen} />

      <header className="relative overflow-hidden">
        <DesktopNavigation setOpen={setOpen} />
        {children}
      </header>
    </>
  );
}
