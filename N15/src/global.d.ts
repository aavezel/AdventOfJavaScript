/// <reference types="svelte" />

type ListItem = {
    id: string,
    title: string,
    description: string[]
}

declare module "*.svelte" {
    const value: any; // Add better type definitions here if desired.
    export default value;
}