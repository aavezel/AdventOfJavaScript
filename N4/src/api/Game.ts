import { KEYBOARD } from 'api/data';
import {OptionsType} from './types';

class Game {
    private _score = 0;
    private currentCode: string | null = null;
    private interval: NodeJS.Timer | null = null;
    private options: OptionsType = {}

    constructor(
        private sample: string[],
    ) { }

    private get score(): number {
        return this._score;
    }

    private set score(value: number) {
        this._score = value;
        if (this.options.scoreChanged) {
            this.options.scoreChanged(value);
        }
    }

    keyDownEvent = (e: KeyboardEvent): void => {
        if (e.code === this.currentCode) {
            this.score++;
            this.changeCurrentCode();
        } else {
            this.score--;
            this.changeCurrentCode();
        }
    }

    failScoreEvent = () => {
        this.score--;
        this.changeCurrentCode();
    }

    changeCurrentCode(): void {
        if (this.interval) clearInterval(this.interval);

        const nextIndex = Math.floor(Math.random() * this.sample.length);
        this.currentCode = this.sample[nextIndex];
        if (this.options.codeChanged) {
            this.options.codeChanged(this.currentCode);
        }

        this.interval = setInterval(this.failScoreEvent, 3000);
    }

    start(options: OptionsType) {
        this.options = options;
        document.addEventListener('keydown', this.keyDownEvent);
        this.changeCurrentCode();
    }

    end() {
        document.removeEventListener('keydown', this.keyDownEvent);
        if (this.interval) clearInterval(this.interval);
    }
}

const sample = KEYBOARD.map(({ code }) => code);
export default new Game(sample);