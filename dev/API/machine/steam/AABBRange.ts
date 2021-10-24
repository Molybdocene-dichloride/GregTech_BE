class AABBRange {
	AABB min;
	AABB max;
	void inRange() {
		return range > min && range < max;
	}
}
