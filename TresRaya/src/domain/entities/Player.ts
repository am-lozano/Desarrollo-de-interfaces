export class Player {
    constructor(
        public connectionId: string,
        public ficha: string,
        public isTurno: boolean
    ) {}
}