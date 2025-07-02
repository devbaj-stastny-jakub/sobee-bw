import { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@/db/entities/user';
import { userRepository } from '@/db/repositories';

export type UserContextState = {
    user: User | null;
    isLoading: boolean;

    refetchUser: () => Promise<void>;
};

const userContextDefaultValues: UserContextState = {
    user: null,
    isLoading: true,

    refetchUser: async () => {},
};

const UserContext = createContext<UserContextState>(userContextDefaultValues);

interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<UserContextState['user']>(null);
    const [isLoading, setIsLoading] = useState<UserContextState['isLoading']>(true);

    const refetchUser = async () => {
        setIsLoading(true);
        try {
            const user = await userRepository.findOne({ where: { userId: 1 } });
            if (user === null) {
                setUser(null);
                return;
            }
            setUser(user);
        } catch (error) {
            console.error('Failed to refetch user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading, refetchUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserContextProvider');
    }
    return context;
};
