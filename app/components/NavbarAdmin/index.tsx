"use client";
import { Typography } from "@components";
import { getLocalData } from "@/app/utils/getLocalData";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NavbarAdmin() {
  const [name, setName] = useState("");
  const router = useRouter();
  useEffect(() => {
    const name = getLocalData("admin");
    if (!name) return router.push("/admin/auth");
    setName(name);
  }, [router]);
  const logOut = useCallback(() => {
    localStorage.clear();
    router.replace("/admin/auth");
  }, [router]);
  return (
    <header className="bg-blue-500 px-12 py-3 text-white flex justify-between items-center">
      <Typography text="Admin paneli" color="text-white" />
      <div className="flex items-center">
        <p>
          Siz <span className="font-bold">{name}</span> sifatida tizimga
          kirgansiz
        </p>
        <button className="p-2 mx-3 bg-blue-400 rounded" onClick={logOut}>
          Chiqish
        </button>
      </div>
    </header>
  );
}

export default NavbarAdmin;
