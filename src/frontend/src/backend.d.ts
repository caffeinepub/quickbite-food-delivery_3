import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface OrderType {
    id: bigint;
    status: string;
    total: number;
    cart: Cart;
    user: Principal;
    shippingAddress: string;
}
export interface Cart {
    items: Array<CartItem>;
}
export interface CartItem {
    color: string;
    size: string;
    productId: bigint;
    quantity: bigint;
}
export interface UserProfile {
    name: string;
    email: string;
    phone: string;
}
export interface Product {
    id: bigint;
    title: string;
    description: string;
    sizes: Array<string>;
    image: ExternalBlob;
    colors: Array<string>;
    price: number;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addProduct(title: string, description: string, price: number, sizes: Array<string>, colors: Array<string>, image: ExternalBlob): Promise<void>;
    addToCart(productId: bigint, quantity: bigint, size: string, color: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    checkout(shippingAddress: string): Promise<OrderType>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCart(): Promise<Cart>;
    getOrders(): Promise<Array<OrderType>>;
    getProducts(): Promise<Array<Product>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
