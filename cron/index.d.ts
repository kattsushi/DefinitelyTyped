// Type definitions for cron 1.0.9
// Project: https://www.npmjs.com/package/cron
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface CronJobStatic {
    new (cronTime: string | Date, onTick: () => void, onComplete?: () => void, start?: boolean, timeZone?: string, context?: any): CronJob;
    new (options: {
        cronTime: string | Date; onTick: () => void; onComplete?: () => void; start?: boolean; timeZone?: string; context?: any
    }): CronJob;
}
interface CronJob {
    start(): void;
    stop(): void;
}
export declare var CronJob: CronJobStatic;

interface CronTimeStatic {
    new (time: string | Date): CronTime;
}
interface CronTime { }
export declare var CronTime: CronTimeStatic;
