class StandardLimiter<PS extends IPartStorage> implements Limiter<PS> {
    limit(slot: PS, limit: number, count: number, forced: boolean = false): void {
		let pre = slot.amount;
        if(forced || limit / count > pre) {
            slot.limit = limit;
            if(limit < pre) {
				slot.amount -= pre - limit;
				return pre - limit;
			}
        }
        return 0;
	}
}
