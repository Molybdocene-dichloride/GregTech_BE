namespace Limiter<PS extends IPartStorage> {
    limit(slot: PS, limit: number, count: number, forced: boolean = false): void;
}
