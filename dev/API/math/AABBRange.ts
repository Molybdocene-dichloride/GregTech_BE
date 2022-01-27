class AABBRange {
	AABB min;
	AABB max;
	void inRange(AABB aabb) {
		return aabb > min && aabb < max;
	}
}
