export interface UserRequest {
        firstname: string;
        lastname: string;
        email: string;
        username: string;
        password: string;
        passwordConfirm: string;
        termsAndConditions: boolean,
        agreement: boolean
}

export interface Usuario {
        userName: string,
        fullname: string,
        roleDescription: string,
        status: number,
    }
