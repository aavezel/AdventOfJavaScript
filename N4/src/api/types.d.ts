export type Key = {
    row: number;
    code: string;
    text: string;
    utility?: boolean;
};

export type OptionsType = {
    scoreChanged?: (newScope: number) => void
    codeChanged?: (newCode: string) => void
}

export type Row = Key[];