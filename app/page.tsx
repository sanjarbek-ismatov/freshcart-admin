import { getSSRData } from "@/app/utils/getData";
import { CategoryType, OrderUsableType, ProductType, UserType } from "../types";
import { Stats } from "@/app/components";

async function AdminDashboardPage() {
  const products = await getSSRData<ProductType[]>(
    `${process.env.SERVER_URL}/product/all`,
  );
  const categories = await getSSRData<CategoryType[]>(
    `${process.env.SERVER_URL}/category/all`,
  );
  const orders = await getSSRData<OrderUsableType[]>(
    `${process.env.SERVER_URL}/order/all`,
  );
  const users = await getSSRData<UserType[]>(
    `${process.env.SERVER_URL}/auth/all`,
  );
  return (
    <>
      <main className="flex-1 px-3">
        <Stats products={products} users={users} orders={orders} />
      </main>
    </>
  );
}

export default AdminDashboardPage;
