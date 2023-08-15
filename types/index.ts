interface ServerResponse<T> {
  // ok: boolean;
  message: string;
  // result: T;
  code: number;
  token?: string;
}

interface AddressType {
  zipCode: number;
  state: string;
  location: string;
}

interface RequestRegisterForm {
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}

interface RequestLoginForm {
  email: string;
  password: string;
}

interface UserType {
  _id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  address: AddressType;
  payment: {
    cardNumber: string;
  };
  username: string;
  password: string;
  liked: ProductType[];

  cart: {
    id: ProductType;
    count: number;
  }[];
}

interface VendorType {
  _id: string;
  name: string;
  slug: string;
  category: string[];
  sells: number;
  stars: number;
  phone: string;
  email: string;
  password: string;
  address: AddressType;
  image: string;
  banner: string;
  products: ProductType[];
}

type OrderUsableType = OrderType<ProductType, VendorType>;

interface VendorWithOrders {
  vendor: VendorType;
  orders: OrderUsableType[];
}

interface SubCategoryType {
  _id: string;
  name: string;
  slug: string;
  group: string;
}

interface CategoryType {
  name: string;
  subCategories: SubCategoryType[];
}

interface VendorType {
  name: string;
  slug: string;
  category: string[];
  sells: number;
  stars: number;
  phone: string;
  email: string;
  password: string;
  image: string;
  banner: string;
  products: ProductType[];
  annualIncome: number;
}

interface ProductType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: CategoryType;
  description: string;
  rating: number;
  images: string[];
  reviews: ReviewType[];
  weight: number;
  vendor: VendorType;
  date: Date;
  isInArchive: boolean;
}

type Status = "pending" | "processing" | "rejected" | "finished";

interface OrderType<
  P extends ProductType | string,
  V extends VendorType | string,
> {
  _id: string;
  clientId: UserType;
  productId: P;
  vendorId: V;
  count: number;
  status: Status;
  date: string;
  slug: string;
  totalPrice: number;
  shippingAddress?: AddressType;
  billingAddress: AddressType;
  paymentMethod: string;
  orderNotes?: string;
}

type Sort = "rating" | "date" | "low" | "high";

interface OrderChangeStatus {
  _id: string;
  status: Status;
}

interface FormObject {
  [key: string]: string | Blob;
}

interface CheckoutProduct {
  id: ProductType;
  count: number;
}

interface ReviewType {
  vendorId: string;
  productId: string;
  clientId: UserType;
  description: string;
  star: number;
  images: string[];
  date: string;
}

export type {
  ServerResponse,
  RequestRegisterForm,
  RequestLoginForm,
  UserType,
  ProductType,
  Sort,
  CategoryType,
  VendorType,
  OrderType,
  VendorWithOrders,
  Status,
  OrderChangeStatus,
  FormObject,
  CheckoutProduct,
  OrderUsableType,
  ReviewType,
  SubCategoryType,
};
