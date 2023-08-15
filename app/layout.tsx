import { ReactNode } from "react";
import {
  NavbarAdmin,
  Navigation,
} from "@/app/components";

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarAdmin />
      <div className="px-12 flex my-5 w-full">
        <Navigation />
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
