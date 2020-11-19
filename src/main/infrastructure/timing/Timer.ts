import {TimerTask} from "./TimerTask";

export class Timer {

    private timeout!: NodeJS.Timer;


    schedule(task: TimerTask, millisecondsToWait: number): void {
        this.timeout = setTimeout(() => {
            task.run();
        }, millisecondsToWait);
    }

    cancel(): void {
        clearTimeout(this.timeout);
    }
}