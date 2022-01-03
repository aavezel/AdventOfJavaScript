import { makeAutoObservable } from 'mobx';

class ViewStore {
    topics = []

    constructor() {
        makeAutoObservable(this);
    }

    setTopics(topics) {
        this.topics = topics;
    }

    calculateSelectedIndex(top, frameSize) {
        let result = 0;
        if (this.topics) {
            const firstOverTopIndex = this.topics.findIndex((topic) => topic.top > top);
            if (firstOverTopIndex !== -1) {
                if (this.topics[firstOverTopIndex].top < top + frameSize) {
                    result = firstOverTopIndex
                } else {
                    result = Math.max(firstOverTopIndex - 1, 0);
                }
            }
        }
        return result;
    }

}

export default new ViewStore();
