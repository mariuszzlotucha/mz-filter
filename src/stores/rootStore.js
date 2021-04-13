import { ImageStore } from './imageStore';

export class RootStore {
    constructor() {
        this.imageStore = new ImageStore(this);
    }
}
