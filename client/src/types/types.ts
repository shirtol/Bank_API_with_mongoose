export interface User {
    userId: string;
    userName: string;
    accounts: Account[];
    phone: string;
    email: string;
}

export interface Account {
    id: string;
    cash: number;
    credit: number;
    isActive: boolean;
    permittedUsers: string[];
}
