import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type User = {
    id: number;
    name: string;
    email: string;
};

export type UserForm = {
    name?: string;
    email: string;
    password: string;
    password_confirmation?: string;
};

type AuthResponse = {
    access_token: string;
    user: User;
};

type AuthContextData = {
    user: User | null;
    signIn: (form: UserForm) => Promise<void>;
    signOut: () => void;
    register: (form: UserForm) => Promise<void>;
};

type AuthProvider = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProvider) {
    const [user, setUser] = useState<User | null>(null);

    async function signIn(form: UserForm) {
        const response = await api.post<AuthResponse>('/login', form);
        const { access_token, user } = response.data;

        localStorage.setItem('@frontend:token', access_token);

        api.defaults.headers.common.authorization = `Bearer ${access_token}`;

        setUser(user);
    }

    async function signOut() {
        setUser(null);
        localStorage.clear();
    }

    async function register(form: UserForm) {
        const response = await api.post<AuthResponse>('/register', form);
        const { access_token, user } = response.data;

        localStorage.setItem('@frontend:token', access_token);

        api.defaults.headers.common.authorization = `Bearer ${access_token}`;

        setUser(user);
    }

    useEffect(() => {
        async function recoverUser() {
            const access_token = localStorage.getItem('@frontend:token');

            if (access_token) {
                api.defaults.headers.common.authorization = `Bearer ${access_token}`;
                const response = await api.get<User>('/profile');
                setUser(response.data);
            }
        }

        recoverUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, register }}>
            {children}
        </AuthContext.Provider>
    );
}
