"use client";
import { LinkOfNavigation, Typography } from "@components";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  // const header = headers();
  // const path = header.get("x-url") || "";
  const lastPath = pathname.split("/").at(-1);
  return (
    <aside className="min-w-[300px]">
      <Typography size="lg" text="Navigatsiya" />
      <ul className="my-5">
        <li>
          <LinkOfNavigation
            href="/admin/dashboard"
            active={lastPath === "dashboard"}
          >
            <i className="fa-solid fa-home"></i> Bosh sahifa
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/site"}
            active={lastPath === "site"}
          >
            <i className="fa-solid fa-gear"></i> Sayt sozlamalari
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/stores"}
            active={lastPath === "stores"}
          >
            <i className="fa-solid fa-shop"></i> Do'konlar
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/users"}
            active={lastPath === "users"}
          >
            <i className="fa-solid fa-user"></i> Foydalanuvchilar
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/products"}
            active={lastPath === "products"}
          >
            <i className="fa-solid fa-cheese"></i> Maxsulotlar
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/orders"}
            active={lastPath === "orders"}
          >
            <i className="fa-solid fa-shopping-cart"></i> Buyurtmalar
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/reviews"}
            active={lastPath === "reviews"}
          >
            <i className="fa-regular fa-comment-dots"></i> Izohlar
          </LinkOfNavigation>
        </li>
      </ul>
    </aside>
  );
}

export default Navigation;
