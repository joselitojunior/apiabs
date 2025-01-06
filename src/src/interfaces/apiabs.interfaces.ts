export type Output<T> = SuccessOutput<T> | ErrorOutput;

export interface SuccessOutput<T> {
    data: T,
    isOk: true,
}

export interface ErrorOutput {
    error: any,
    isOk: false,
}

export interface DefaultMethodProps {
    errorMessage?: string,
    onErrorExecute?: (message?: string) => {},
}

export interface GetProps extends DefaultMethodProps {
    route: string,
}

export interface PostProps extends DefaultMethodProps {
    route: string,
    body?: any,
}

export interface DeleteProps extends DefaultMethodProps {
    route: string,
    body?: any,
}

export interface PutProps extends DefaultMethodProps {
    route: string,
    body?: any,
}

export interface PatchProps extends DefaultMethodProps {
    route: string,
    body?: any,
}

export interface APIABSProps {
    baseURL: string,
}