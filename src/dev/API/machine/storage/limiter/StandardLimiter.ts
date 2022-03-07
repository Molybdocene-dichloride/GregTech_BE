class StandardLimiter<PS extends Slot> implements Limiter<PS> {
    limit(Slot: PS, limit: number, count: number, forced: boolean = false): void {
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
