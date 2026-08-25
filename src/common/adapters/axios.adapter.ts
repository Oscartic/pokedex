import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private readonly axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
      try {
        const { data } = await this.axios.get<T>(url);
        return data;
      } catch (error) {
        throw new Error('AxiosAdapter GET request failed');
      }
    }
    post<T = any>(url: string, data: any): Promise<T> {
        throw new Error('Method not implemented.');
    }
    patch<T = any>(url: string, data: any): Promise<T> {
        throw new Error('Method not implemented.');
    }
    delete<T = any>(url: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}