import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { DeleteProps, APIABSProps, GetProps, Output, PatchProps, PostProps, PutProps } from '../interfaces/apiabs.interfaces';

export default abstract class apiabs {
    private axiosInstance: AxiosInstance;

    constructor({ baseURL }: APIABSProps) {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    protected async get<T>({ route, errorMessage, onErrorExecute }: GetProps): Promise<Output<T>> {
        try {
            const { data }: AxiosResponse<T> = await this.axiosInstance.get(route)
            return { data, isOk: true }
        } catch (error) {
            await this.onError({ errorMessage, onErrorExecute, route, error });
            return { error, isOk: false }
        }
    }

    protected async post<T>({ route, body, errorMessage, onErrorExecute }: PostProps): Promise<Output<T>> {
        try {
            const { data }: AxiosResponse<T> = await this.axiosInstance.post(route, body);
            return { data, isOk: true }
        } catch (error) {
            await this.onError({ errorMessage, onErrorExecute, body, route, error });
            return { error, isOk: false };
        }
    }

    protected async put<T>({ route, body, errorMessage, onErrorExecute }: PutProps): Promise<Output<T>> {
        try {
            const { data }: AxiosResponse<T> = await this.axiosInstance.put(route, body);
            return { data, isOk: true }
        } catch (error) {
            await this.onError({ errorMessage, onErrorExecute, body, route, error });
            return { error, isOk: false };
        }
    }

    protected async patch<T>({ route, body, errorMessage, onErrorExecute }: PatchProps): Promise<Output<T>> {
        try {
            const { data }: AxiosResponse<T> = await this.axiosInstance.patch(route, body);
            return { data, isOk: true }
        } catch (error) {
            await this.onError({ errorMessage, onErrorExecute, body, route, error });
            return { error, isOk: false };
        }
    }

    protected async delete<T>({ route, body, errorMessage, onErrorExecute }: DeleteProps): Promise<Output<T>> {
        try {
            const { data }: AxiosResponse<T> = await this.axiosInstance.delete(route, body);
            return { data, isOk: true }
        } catch (error) {
            await this.onError({ errorMessage, onErrorExecute, body, route, error });
            return { error, isOk: false };
        }
    }

    private async onError({ errorMessage, onErrorExecute = () => { }, body, route, error }: { errorMessage?: string, onErrorExecute?: Function, body?: any, route: string, error: unknown }) {
        if (errorMessage) {
            console.log(errorMessage);
        }
        console.log(`Error at processing a request on route: ${route}`)
        if (body) {
            console.log('Body request:', body)
        }
        if (axios.isAxiosError(error)) {
            await onErrorExecute(error?.response?.data?.message as string | undefined);
        } else {
            await onErrorExecute();
        }
    }
}
