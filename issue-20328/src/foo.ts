import type { Failure, Success } from '@types/lib';

type Result = Success & Failure;

export function handle(r: Result): string {
    return r.kind;
}
