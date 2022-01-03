import DATA from './data.json';

export const getItems = async () => {
    return DATA;
}

export const getItem = async (id: string) => {
    return DATA.find(item => item.id === id);
}
