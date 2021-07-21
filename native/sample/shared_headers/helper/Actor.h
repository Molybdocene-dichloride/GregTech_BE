#pragma once
#include <helper\Util.h>
#include <helper\BlockPos.h>
#include <helper\Random.h>
#include <helper\RenderParams.h>

class ActorBlockSyncMessage;
class ActorLocation;
class ActorDamageSource;
class RideTickComponent;
//class MaterialType;
enum MaterialType {
    MATERIAL_DEFAULT = 0
};
class ActorEvent;
class CompoundTag;
class ActorLink;
class ChangeDimensionPacket;
class DataLoadHelper;
class Attribute;
class ActorType;
class ActorFlags;
class MobEffectInstance;
class RenderParams;
class EquipmentTableDescription;
class Options;
class Player;
class ActorInteraction;
class Vec2;
class ItemUseMethod;
class ItemStack;
class ActorDefinitionIdentifier;
class ActorDefinitionGroup;
class ActorCategory;
class MobEffect;
class ActorRuntimeID;
class UpdateEquipPacket;
class UpdateTradePacket;
class VariantParameterList;
class EntityRegistryOwned;
class ItemActor;
class ActorDamageCause;
class ActionEvent;
class SeatDescription;
class BlockSource;
class AABB;
class CollisionBoxDescription;
class PaletteColor;
class AttributeBuffType;
class InputMode;
class UIProfanityContext;
class ActorUniqueID;
class Block;
class ArmorSlot;
class LevelSoundEvent;
class Level;
class Dimension;
class Mob;
class HashedString;

class Actor {
public:
	//char filler_Actor[UNKNOW_SIZE];
public:
	virtual ~Actor();
	//virtual void reloadHardcoded(Actor::InitializationMethod, VariantParameterList const&);
	//virtual void reloadHardcodedClient(Actor::InitializationMethod, VariantParameterList const&);
	//virtual void initializeComponents(Actor::InitializationMethod, VariantParameterList const&);
	//virtual void reloadComponents(Actor::InitializationMethod, VariantParameterList const&);
	virtual void hasComponent(Util::HashString const&) const;
	virtual void reset();
	virtual void getOwnerEntityType();
	virtual void remove();
	virtual void setPos(Vec3 const&);
	virtual void getPos() const;
	virtual void getPosOld() const;
	virtual void getPosExtrapolated(float) const;
	virtual void getAttachPos(ActorLocation, float) const;
	virtual void getFiringPos() const;
	virtual void setRot(Vec2 const&);
	virtual void move(Vec3 const&);
	virtual void getInterpolatedRidingPosition(float) const;
	virtual void getInterpolatedBodyRot(float) const;
	virtual void getInterpolatedHeadRot(float) const;
	virtual void getInterpolatedBodyYaw(float) const;
	virtual void getYawSpeedInDegreesPerSecond() const;
	virtual void getInterpolatedWalkAnimSpeed(float) const;
	virtual void getInterpolatedRidingOffset(float) const;
	virtual void checkBlockCollisions(AABB const&);
	virtual void checkBlockCollisions();
	virtual void breaksFallingBlocks() const;
	virtual void blockedByShield(ActorDamageSource const&, Actor&);
	virtual void moveRelative(float, float, float, float);
	virtual void teleportTo(Vec3 const&, bool, int, int);
	virtual void tryTeleportTo(Vec3 const&, bool, bool, int, int);
	virtual void chorusFruitTeleport(Vec3&);
	virtual void lerpTo(Vec3 const&, Vec2 const&, int);
	virtual void lerpMotion(Vec3 const&);
	virtual void getAddPacket();
	virtual void normalTick();
	virtual void baseTick();
	virtual void assignRideTickFunctions(RideTickComponent&);
	virtual void positionRider(Actor&, float);
	virtual void getRidingHeight();
	virtual void startRiding(Actor&);
	virtual void addRider(Actor&);
	virtual void flagRiderToRemove(Actor&);
	virtual void getExitTip(std::string const&, InputMode) const;
	virtual void intersects(Vec3 const&, Vec3 const&) const;
	virtual void isFree(Vec3 const&, float);
	virtual void isFree(Vec3 const&);
	virtual void isInWall() const;
	virtual void isInvisible() const;
	virtual void canShowNameTag() const;
	virtual void canExistInPeaceful() const;
	virtual void setNameTagVisible(bool);
	virtual void getNameTag() const;
	virtual void getNameTagAsHash() const;
	virtual void getFormattedNameTag() const;
	virtual void filterFormattedNameTag(UIProfanityContext const&);
	virtual void setNameTag(std::string const&);
	virtual void getAlwaysShowNameTag() const;
	virtual void setScoreTag(std::string const&);
	virtual void getScoreTag() const;
	virtual void isInWater() const;
	virtual void hasEnteredWater() const;
	virtual void isImmersedInWater() const;
	virtual void isInWaterOrRain() const;
	virtual void isInLava() const;
	virtual void isUnderLiquid(MaterialType) const;
	virtual void isOverWater() const;
	virtual void makeStuckInBlock(float);
	virtual void getCameraOffset() const;
	virtual void getShadowHeightOffs();
	virtual void getShadowRadius() const;
	virtual void getHeadLookVector(float);
	virtual void canSeeInvisible() const;
	virtual void canSee(Actor const&) const;
	virtual void canSee(Vec3 const&) const;
	virtual void isSkyLit(float);
	virtual void getBrightness(float) const;
	virtual void interactPreventDefault();
	virtual void playerTouch(Player&);
	virtual void onAboveBubbleColumn(bool);
	virtual void onInsideBubbleColumn(bool);
	virtual void isImmobile() const;
	virtual void isSilent();
	virtual void isPickable();
	virtual void isFishable() const;
	virtual void isSleeping() const;
	virtual void isShootable();
	virtual void isSneaking() const;
	virtual void setSneaking(bool);
	virtual void isBlocking() const;
	virtual void isDamageBlocked(ActorDamageSource const&) const;
	virtual void isAlive() const;
	virtual void isOnFire() const;
	virtual void isOnHotBlock() const;
	virtual void isCreativeModeAllowed();
	virtual void isSurfaceMob() const;
	virtual void isTargetable() const;
	virtual void canAttack(Actor*, bool) const;
	virtual void setTarget(Actor*);
	virtual void findAttackTarget();
	virtual void isValidTarget(Actor*) const;
	virtual void attack(Actor&);
	virtual void performRangedAttack(Actor&, float);
	virtual void adjustDamageAmount(int&) const;
	virtual void setOwner(ActorUniqueID);
	virtual void setSitting(bool);
	virtual void onTame();
	virtual void onFailedTame();
	virtual void getInventorySize() const;
	virtual void getEquipSlots() const;
	virtual void getChestSlots() const;
	virtual void setStanding(bool);
	virtual void canPowerJump() const;
	virtual void setCanPowerJump(bool);
	virtual void isJumping() const;
	virtual void isEnchanted() const;
	virtual void rideJumped();
	virtual void rideLanded(Vec3 const&, Vec3 const&);
	virtual void shouldRender() const;
	virtual void isInvulnerableTo(ActorDamageSource const&) const;
	virtual void actuallyHurt(int, ActorDamageSource const*, bool);
	virtual void animateHurt();
	virtual void doFireHurt(int);
	virtual void onLightningHit();
	virtual void onBounceStarted(BlockPos const&, Block const&);
	virtual void feed(int);
	virtual void handleEntityEvent(ActorEvent, int);
	virtual void getPickRadius();
	virtual void spawnAtLocation(int, int);
	virtual void spawnAtLocation(int, int, float);
	virtual void spawnAtLocation(Block const&, int);
	virtual void spawnAtLocation(Block const&, int, float);
	virtual void spawnAtLocation(ItemStack const&, float);
	virtual void despawn();
	virtual void killed(Actor&);
	virtual void awardKillScore(Actor&, int);
	virtual void setArmor(ArmorSlot, ItemStack const&);
	virtual void getArmor(ArmorSlot) const;
	virtual void getArmorMaterialTypeInSlot(ArmorSlot) const;
	virtual void getArmorMaterialTextureTypeInSlot(ArmorSlot) const;
	virtual void getArmorColorInSlot(ArmorSlot, int) const;
	virtual void setEquippedSlot(ArmorSlot, int, int);
	virtual void setEquippedSlot(ArmorSlot, ItemStack const&);
	virtual void getCarriedItem() const;
	virtual void setCarriedItem(ItemStack const&);
	virtual void setOffhandSlot(ItemStack const&);
	virtual void getEquippedTotem() const;
	virtual void consumeTotem();
	virtual void save(CompoundTag&);
	virtual void saveWithoutId(CompoundTag&);
	virtual void load(CompoundTag const&, DataLoadHelper&);
	//virtual void loadLinks(CompoundTag const&, std::vector<ActorLink, std::allocator<ActorLink> >&, DataLoadHelper&);
	virtual void getEntityTypeId() const;
	virtual void queryEntityRenderer() const;
	virtual void getSourceUniqueID() const;
	virtual void setOnFire(int);
	virtual void getHandleWaterAABB() const;
	virtual void handleInsidePortal(BlockPos const&);
	virtual void getPortalCooldown() const;
	virtual void getPortalWaitTime() const;
	virtual void getDimensionId() const;
	virtual void canChangeDimensions() const;
	//virtual void changeDimension(AutomaticID<Dimension, int>, bool);
	virtual void changeDimension(ChangeDimensionPacket const&);
	virtual void getControllingPlayer() const;
	virtual void checkFallDamage(float, bool);
	virtual void causeFallDamage(float);
	virtual void handleFallDistanceOnServer(float, bool);
	virtual void playSynchronizedSound(LevelSoundEvent, Vec3 const&, Block const&, bool);
	virtual void playSynchronizedSound(LevelSoundEvent, Vec3 const&, int, bool);
	virtual void onSynchedDataUpdate(int);
	virtual void canAddRider(Actor&) const;
	virtual void canBePulledIntoVehicle() const;
	virtual void inCaravan() const;
	virtual void isLeashableType();
	virtual void tickLeash();
	virtual void sendMotionPacketIfNeeded();
	virtual void canSynchronizeNewEntity() const;
	virtual void stopRiding(bool, bool, bool);
	virtual void startSwimming();
	virtual void stopSwimming();
	virtual void buildDebugInfo(std::string&) const;
	virtual void getCommandPermissionLevel() const;
	virtual void getMutableAttribute(Attribute const&);
	virtual void getAttribute(Attribute const&) const;
	virtual void getDeathTime() const;
	virtual void heal(int);
	virtual void isInvertedHealAndHarm() const;
	virtual void canBeAffected(int) const;
	virtual void canBeAffected(MobEffectInstance const&) const;
	virtual void canBeAffectedByArrow(MobEffectInstance const&) const;
	virtual void onEffectAdded(MobEffectInstance&);
	virtual void onEffectUpdated(MobEffectInstance const&);
	virtual void onEffectRemoved(MobEffectInstance&);
	virtual void openContainerComponent(Player&);
	virtual void swing();
	virtual void useItem(ItemStack&, ItemUseMethod, bool);
	virtual void hasOutputSignal(unsigned char) const;
	virtual void getOutputSignal() const;
	//virtual void getDebugText(std::vector<std::string, std::allocator<std::string> >&);
	virtual void getMapDecorationRotation() const;
	virtual void getRiderYRotation(Actor const&) const;
	virtual void getYHeadRot() const;
	virtual void isWorldBuilder();
	virtual void isCreative() const;
	virtual void isAdventure() const;
	virtual void add(ItemStack&);
	virtual void drop(ItemStack const&, bool);
	virtual void getInteraction(Player&, ActorInteraction&, Vec3 const&);
	virtual void canDestroyBlock(Block const&) const;
	virtual void setAuxValue(int);
	virtual void setSize(float, float);
	virtual void getLifeSpan() const;
	virtual void onOrphan();
	virtual void wobble();
	virtual void wasHurt();
	virtual void startSpinAttack();
	virtual void stopSpinAttack();
	virtual void setDamageNearbyMobs(bool);
	virtual void renderDebugServerState(Options const&);
	virtual void reloadLootTable();
	virtual void reloadLootTable(EquipmentTableDescription const*);
	virtual void getDeletionDelayTimeSeconds() const;
	virtual void kill();
	virtual void die(ActorDamageSource const&);
	virtual void shouldTick() const;
	virtual void updateEntitySpecificMolangVariables(RenderParams&);
	virtual void canMakeStepSound() const;
	virtual void outOfWorld();
	virtual void _hurt(ActorDamageSource const&, int, bool, bool);
	virtual void markHurt();
	virtual void readAdditionalSaveData(CompoundTag const&, DataLoadHelper&);
	virtual void addAdditionalSaveData(CompoundTag&);
	virtual void _playStepSound(BlockPos const&, Block const&);
	virtual void _playFlySound(BlockPos const&, Block const&);
	virtual void _makeFlySound() const;
	virtual void checkInsideBlocks(float);
	virtual void pushOutOfBlocks(Vec3 const&);
	virtual void updateWaterState();
	virtual void doWaterSplashEffect();
	virtual void spawnTrailBubbles();
	virtual void updateInsideBlock();
	virtual void getLootTable();
	virtual void getDefaultLootTable();
	virtual void _removeRider(ActorUniqueID const&, bool, bool);
	virtual void onSizeUpdated();
	virtual void _doAutoAttackOnTouch(Actor&);
public:
	Actor(ActorDefinitionGroup*, ActorDefinitionIdentifier const&);
	Actor(Level&);
	void getLevel();
	void hasType(ActorType) const;
	void setStatusFlag(ActorFlags, bool);
	void isWASDControlled();
	void getControllingSeat();
	void getStateVectorComponentNonConst();
	void isSwimming() const;
	void hasCategory(ActorCategory) const;
	void getRuntimeID() const;
	void getRiderIndex(Actor&) const;
	void isOverScaffolding() const;
	void getRide() const;
	void isRiding() const;
	void onLadder(bool) const;
	void getRegion() const;
	void hasEffect(MobEffect const&) const;
	void getStateVectorComponent() const;
	void getLocator(HashedString const&) const;
	void getUniqueID() const;
	void hasUniqueID() const;
	void getDimension() const;
	void getActorToWorldTransform(float, bool, Vec3 const&) const;
	void getInterpolatedPosition(float) const;
	void isRegionValid() const;
	void getHealth() const;
	void getAllEffects() const;
	void getActiveEffectCount() const;
	void isRemoved() const;
	void setLastHitBB(Vec3 const&, Vec3 const&);
	void getEntityTerrainInterlockData();
	void distanceToSqr(Vec3 const&) const;
	void getStatusFlag(ActorFlags) const;
	void getViewVector(float) const;
	void getViewVector2(float) const;
	void getAABBShapeComponent() const;
	void isRider(Actor const&) const;
	void isInScaffolding() const;
	void getRotation() const;
	void setUniqueID(ActorUniqueID);
	void removeEffect(int);
	void setRuntimeID(ActorRuntimeID);
	void getAttributes();
	void getEntityData();
	void setPreviousPosRot(Vec3 const&, Vec2 const&);
	void getSpatialNetworkData();
	void tick(BlockSource&);
	void moveTo(Vec3 const&, Vec2 const&);
	void reload();
	void addEffect(MobEffectInstance const&);
	void getOffhandSlot() const;
	void isRider(ActorUniqueID const&) const;
	void _getBlockOnPos();
	void hurt(ActorDamageSource const&, int, bool, bool);
	void playSound(LevelSoundEvent, Vec3 const&, int);
	void getRideRuntimeID() const;
	void getActorIdentifier() const;
	void getDamageNearbyMobs() const;
	void isBaby() const;
	void getLevel() const;
	void getEffect(MobEffect const&) const;
	void resetRegion();
	void setRegion(BlockSource&);
	void getInterpolatedRotation(float) const;
	void getMolangVariables();
	void getRenderLeashHolder();
	void getAnimationComponent();
	void updateMolangVariables(RenderParams&);
	void isTrading() const;
	void getHurtDir() const;
	void getHurtTime() const;
	void getStructuralIntegrity() const;
	void getEntityData() const;
	void hasLevel() const;
	void isSitting() const;
	void getCenter(float) const;
	void getSwimAmount(float) const;
	void getDimensionConst() const;
	void getVariant() const;
	void getOwner() const;
	void getHurtColor() const;
	void getColor() const;
	void fetchFishingHook();
	void hasFishingHook() const;
	void getFirstRider() const;
	void getLeashHolder() const;
	void isControlledByLocalInstance() const;
	void isGlobal() const;
	void isLeashed() const;
	void hasRider() const;
	void getTickingArea();
	void setChanged();
	void distanceSqrToBlockPosCenter(BlockPos const&) const;
	void isInsidePortal();
	void _setLevelPtr(Level*);
	void setEquipFromPacket(UpdateEquipPacket const&);
	void setOffersFromPacket(UpdateTradePacket const&);
	void getPlayerOwner() const;
	void setVariant(int);
	void initParams(VariantParameterList&);
	void isTame() const;
	void getTarget() const;
	void getMaxHealth() const;
	void setDancing(bool);
	void isFireImmune() const;
	void dropLeash(bool, bool);
	void hasPlayerRider() const;
	void removeAllRiders(bool, bool);
	void setInvisible(bool);
	void getOwnerId() const;
	void getRemoved();
	void distanceToSqr(Actor const&) const;
	void buildForward() const;
	void getEconomyTradeableComponent() const;
	void migrateUniqueID(ActorUniqueID);
	void teleportRidersTo(Vec3 const&, int, int);
	void isSpawnableInCreative(ActorType);
	void distanceTo(Actor const&) const;
	void positionAllRiders();
	void hasTag(std::string const&) const;
	void hasTags() const;
	void setPersistent();
	void isAutonomous() const;
	void _sendDirtyActorData();
	void _setPosPrev(Vec3 const&);
	void _playMovementSound(bool);
	//void _setNetherPortalData(AutomaticID<Dimension, int>, AutomaticID<Dimension, int>, int);
	void createUpdateEquipPacket(int);
	void createUpdateTradePacket(int);
	void getShakeTime() const;
	void getMarkVariant() const;
	void getSpeedInMetersPerSecond() const;
	void getVerticalSpeedInMetersPerSecond() const;
	void getSkinID() const;
	void _countFood(int);
	void initEntity(EntityRegistryOwned&);
	void moveChunks();
	void pickUpItem(ItemActor&);
	void pickUpItem(ItemActor&, int);
	void restrictTo(BlockPos const&, float);
	void setAABBDim(Vec2 const&);
	void setCharged(bool);
	void setHurtDir(int);
	void setPosPrev(Vec3 const&);
	void setPowered(bool);
	void setResting(bool);
	void setSwimmer(bool);
	void setTempted(bool);
	void _setAABBDim(Vec2 const&);
	void _tryPlaceAt(Vec3 const&);
	void dropTowards(ItemStack const&, Vec3);
	void getTargetId();
	void healEffects(int);
	void setCanClimb(bool);
	void setClimbing(bool);
	void setHurtTime(int);
	void setStrength(int);
	void _refreshAABB();
	void executeEvent(std::string const&, VariantParameterList const&);
	void pullInEntity(Actor&);
	void removeEntity();
	void setEnchanted(bool);
	void setShakeTime(int);
	void shouldOrphan(BlockSource&);
	void _manageRiders(BlockSource&);
	void _setDimension(Dimension&);
	void hasExcessFood();
	void setAutonomous(bool);
	void setDoorOpener(bool);
	void setLayingDown(bool);
	void wantsMoreFood();
	void getTradeOffers();
	void setBlockTarget(BlockPos const&);
	void setDoorBreaker(bool);
	void setLeashHolder(ActorUniqueID);
	void setLimitedLife(int);
	void setMarkVariant(int);
	void setStrengthMax(int);
	void _convertOldSave(CompoundTag const&);
	void _randomHeartPos();
	void _setActorTypeId(ActorType);
	void loadEntityFlags(CompoundTag const&, DataLoadHelper&);
	void saveEntityFlags(CompoundTag&);
	void setExperimental(bool);
	void setJumpDuration(int);
	void _setHeightOffset(float);
	void clearActionQueue();
	void clearRestriction();
	void getCollidableMob();
	void getHandContainer();
	void onChunkDiscarded();
	void removeAllEffects();
	void setCollidableMob(bool);
	void setFishingHookID(ActorUniqueID);
	void setTradeInterest(bool);
	void setTradingPlayer(Player*);
	void _damageNearbyMobs();
	void _updateOwnerChunk();
	void checkDamageSensor(Actor*, ActorDamageCause, int, bool, int);
	void getArmorContainer();
	void onOnewayCollision(BlockPos);
	void onOnewayCollision(AABB const&);
	void refreshComponents();
	void setBaseDefinition(ActorDefinitionIdentifier const&, bool, bool);
	void setWASDControlled(bool);
	void spawnEatParticles(ItemStack const&, int);
	void updateDescription();
	void updateTickingData();
	void addDefinitionGroup(std::string const&);
	void cacheComponentData();
	void clearFishingHookID();
	void getNextActionEvent(ActionEvent&);
	void sendMotionToServer();
	void setControllingSeat(int);
	void setPosDirectLegacy(Vec3 const&);
	void setSeatDescription(Vec3 const&, SeatDescription const&);
	void spawnDustParticles();
	void _spawnPukeParticles();
	void forEachLeashedActor(std::function<void (Actor*)>);
	void getSlotAllowedItems(int);
	void savePersistingTrade(std::unique_ptr<CompoundTag, std::default_delete<CompoundTag> >, int);
	void setDelayedAttacking(bool);
	void spawnDeathParticles();
	void transferTickingArea(Dimension&);
	void _serializeComponents(CompoundTag&);
	void enableAutoSendPosRot(bool);
	void getCollidableMobNear();
	void getRandomPointInAABB(Random&);
	void hasEnoughFoodToBreed();
	void removeEffectNoUpdate(int);
	void setCollidableMobNear(bool);
	void spawnTamingParticles(bool);
	void calculateAttackDamage(Actor&);
	void removeDefinitionGroup(std::string const&);
	void removeEffectParticles();
	void removePersistingTrade();
	void resetClientAnimations();
	//void testForCollidableMobs(BlockSource&, AABB const&, std::vector<AABB, std::allocator<AABB> >&);
	//void testForEntityStacking(BlockSource&, AABB const&, std::vector<AABB, std::allocator<AABB> >&);
	void doEnchantDamageEffects(Mob&, Mob&);
	void serializationSetHealth(int);
	void setBreakingObstruction(bool);
	void setStructuralIntegrity(int);
	void _updateOnewayCollisions(BlockSource&);
	void fetchNearbyActorsSorted(Vec3 const&, ActorType);
	void getInitializationMethod();
	void setChainedDamageEffects(bool);
	void updateBBFromDescription(CollisionBoxDescription const&);
	void updateBBFromDescription();
	void getPersistingTradeOffers();
	void getPersistingTradeRiches();
	void spawnBalloonPopParticles();
	void updateInvisibilityStatus();
	void updateInBubbleColumnState();
	void _initializeLeashRopeSystem();
	void checkEntityOnewayCollision(BlockSource&, BlockPos const&);
	void deregisterTagsFromLevelCache();
	void setEnforceRiderRotationLimit(bool);
	void setInheritRotationWhenRiding(bool);
	void _getAABBShapeComponentNonConst();
	void _setupServerAnimationComponent();
	void _spawnTreasureHuntingParticles();
	void _getStateVectorComponentNonConst();
	void pushBackActionEventToActionQueue(ActionEvent);
	void burn(int, bool);
	void addTag(std::string const&);
	void _setPos(Vec3 const&);
	void moveBBs(Vec3 const&);
	void _setAABB(AABB const&);
	void setColor(PaletteColor);
	void _exitRide(Actor const&, float);
	void playSound(LevelSoundEvent, Vec3 const&, Block const&);
	void removeTag(std::string const&);
	void setCanFly(bool);
	void setColor2(PaletteColor);
	void setGlobal(bool);
	void setInLove(Actor*);
	void setMoving(bool);
	void setSaddle(bool);
	void setScared(bool);
	void setSkinID(int);
	void setWalker(bool);
	void operator==(Actor&);
	void distanceTo(Vec3 const&) const;
	void getTempted() const;
	void isClimbing() const;
	void isInClouds() const;
	void isStanding() const;
	void isTrusting() const;
	void getRideRoot() const;
	void getStrength() const;
	void isDebugging() const;
	void isStackable() const;
	void getAirSupply() const;
	void hasRuntimeID() const;
	void isDoorOpener() const;
	void isLayingDown() const;
	void isPersistent() const;
	void calcCenterPos() const;
	void hasAnyEffects() const;
	void hasTeleported() const;
	void isDoorBreaker() const;
	void lovePartnerId() const;
	void getBlockTarget() const;
	void getRegionConst() const;
	void getStrengthMax() const;
	void hasRestriction() const;
	void hasSubBBInLava() const;
	void hasTickingArea() const;
	void isExperimental() const;
	void _sendLinkPacket(ActorLink const&) const;
	void getJumpDuration() const;
	void isTickingEntity() const;
	void canOpenContainer(Player&) const;
	void getHandContainer() const;
	void getTradeInterest() const;
	void getTradingPlayer() const;
	void hasAttributeBuff(AttributeBuffType) const;
	void hasTotemEquipped() const;
	void isInThunderstorm() const;
	void isUnderWaterfall() const;
	void getArmorContainer() const;
	void getRestrictCenter() const;
	void getRestrictRadius() const;
	void getTotalAirSupply() const;
	void isAutoSendEnabled() const;
	void isInPrecipitation() const;
	void isSafeToSleepNear() const;
	void hasDefinitionGroup(std::string const&) const;
	void hasPersistingTrade() const;
	void isActionQueueEmpty() const;
	void isDelayedAttacking() const;
	void buildDebugGroupInfo(std::string&) const;
	void isInsideBorderBlock(float) const;
	void isWithinRestriction(BlockPos const&) const;
	void isWithinRestriction() const;
	void getAmbientSoundEvent() const;
	void getCurrentSwimAmount() const;
	void hasAnyVisibleEffects() const;
	void getPortalEntranceAxis() const;
	void getSpatialNetworkData() const;
	void hasPriorityAmmunition() const;
	void isBreakingObstruction() const;
	void getChainedDamageEffects() const;
	void getFirstAvailableSeatPos(Actor&, Vec3&) const;
	void enforceRiderRotationLimit() const;
	void getAmbientSoundIntervalMin(float&) const;
	void getAmbientSoundIntervalRange(float&) const;
	void canBeginOrContinueClimbingLadder(bool) const;
	void canFly() const;
	void canMate(Actor const&) const;
	void getTags() const;
	void isAngry() const;
	void canClimb() const;
	void getLinks() const;
	void isBribed() const;
	void isInLove() const;
	void isInRain() const;
	void isInSnow() const;
	void isMoving() const;
	void isOrphan() const;
	void isScared() const;
	void isWalker() const;
	void getColor2() const;
	void getRadius() const;
	void hasFamily(Util::HashString const&) const;
	void hasSaddle() const;
	void isCharged() const;
	void isChested() const;
	void isDancing() const;
	void isIgnited() const;
	void isInWorld() const;
	void isPowered() const;
	void isResting() const;
	void isSheared() const;
	void isSwimmer() const;
	void saveLinks() const;
public:
	static Actor * RIDING_TAG;
	static Actor * TOTAL_AIR_SUPPLY;
	static Actor * DAMAGE_NEARBY_MOBS_DURATION;
	static Actor * DEFAULT_AMBIENT_SOUND_INTERVAL;
	static Actor * DEFAULT_AMBIENT_SOUND_INTERVAL_RANGE;
};