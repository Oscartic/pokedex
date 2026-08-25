export interface HttpAdapter {
    get<T = any>(url: string): Promise<T>;
    post<T = any>(url: string, data: any): Promise<T>;
    patch<T = any>(url: string, data: any): Promise<T>;
    delete<T = any>(url: string): Promise<T>;
}