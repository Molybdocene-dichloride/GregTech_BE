/*
  ____                        _     _     ____   ___ 
 / ___|  ___  _   _ _ __   __| |   / \   |  _ \ |_ _|
 \___ \ / _ \| | | | '_ \ / _` |  / _ \  | |_) | | | 
  ___) | (_) | |_| | | | | (_| | / ___ \ |  __/  | | 
 |____/ \___/ \__,_|_| |_|\__,_|/_/   \_\|_|    |___|
                                                                
    SoundAPI library

    Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.

    ©WolfTeam ( https://vk.com/wolf___team )
 */
/*ChangeLog:
	v2.3
		- Fix shared.
		- The volume of the player depends on the volume in the game settings.
	v2.2
		- Fix a bug due to which the sound did not change its volume regardless of what it is attached to.
		- The previous volume formula was returned due to the incorrect operation of the previous one.
	v.2.1
		- Add method destroy
		- Add methods isPlaying and isLooping for class Sound
		- Fix bug when creating an empty Sound Player
		- Fix formula for dependence of sound volume on distance
	v.2
		- Add class MultiSound
		- Add methods setInEntity and setVolume for class Sound
	v.1
		- release
*/
LIBRARY({
    name: "SoundAPI",
    version: 2.3,
    api: "CoreEngine"
});

var _soundUtils = {
	maxPlayer:30,
	
	sounds:[],
	target:[],
	
	source:{
		NULL:null,
		PLAYER:1,
		BLOCK:2,
		ENTITY:3,
	},
	
	getFreePlayer:function(){
		if(this.sounds.length == this.maxPlayer)
			for(var i in this.target)
				if(this.target[i]==null)
					return i;
		
		return -1;
	},
	
	getPlayer:function(id){
		return this.sounds[id];
	},

	updateVolume:function(){
		for(var i in this.sounds){
			if(this.target[i]==this.source.NULL)continue;
			
			var s = this.sounds[i];
			if(s.source==this.source.PLAYER)continue;
			
			var pp = Player.getPosition();//x,y,z
			if(s.source==this.source.BLOCK){
				var pb = {
						x:s.position.x-pp.x,
						y:s.position.y-pp.y,
						z:s.position.z-pp.z
					};
			}else if(s.source==this.source.ENTITY){
				var pe = Entity.getPosition(s.entity);
				var pb = {
						x:pe.x-pp.x,
						y:pe.y-pp.y,
						z:pe.z-pp.z
					};
			}
			
		
			var pz = { x:0, y:0, z:5 };
			
			var pAngle = ((2*Math.PI) - (Entity.getLookAngle(Player.get()).yaw%(2*Math.PI)))%(2*Math.PI);
			if(pAngle<0)pAngle+=2*Math.PI;
			var bAngle = Math.acos((pb.x*pz.x + pb.y*pz.y + pb.z*pz.z)/(Math.sqrt(Math.pow(pb.x, 2)+Math.pow(pb.y, 2)+Math.pow(pb.z, 2))*Math.sqrt(Math.pow(pz.x, 2)+Math.pow(pz.y, 2)+Math.pow(pz.z, 2))));
			if(pp.x>s.position.x)bAngle= 2*Math.PI - bAngle;
			
			var angle = bAngle-pAngle + (Math.PI / 2);
			if(angle<0)angle+=2*Math.PI;
			if(angle>Math.PI)angle -= 2*Math.PI;
			
			var radVol = 0.9 / (Math.PI);
			if(angle<0)angle=angle*-1;
			var distance = Math.sqrt(Math.pow(pb.x, 2)+Math.pow(pb.y, 2)+Math.pow(pb.z, 2))
			var P20 = 30 - 20*Math.log10(distance);
			var _distance = s.radius - distance;
				if(_distance < 0) _distance = 0;
			
			var left_volume, right_volume;
			if(distance <= 2)
				left_volume = (0.1 + (radVol*angle))*s.volume,
				right_volume = (1 - (radVol*angle))*s.volume;
			else{
				left_volume = (0.1 + (radVol*angle))*s.volume/(s.radius - 2)*_distance,
				right_volume = (1 - (radVol*angle))*s.volume/(s.radius - 2)*_distance;
			}
			s.media.setVolume(left_volume * gameVolume, right_volume * gameVolume);
		}
	},
	
	leaveWorld:function(){
		for(var i in this.sounds){
			var s = this.sounds[i];
			if(s.source==this.source.PLAYER)continue;
			
			s.pause();
		}
	},
};

var Sound = function(src, vol){
	
	if(_soundUtils.getFreePlayer()==-1){
		this.media = new android.media.MediaPlayer();
	}else{
		this._id = _soundUtils.getFreePlayer();
		this.media = _soundUtils.getPlayer(this._id).media;
	}
	
	if(src && typeof src == "string"){
		this.path = __dir__+"sounds/"+src;
		this.media.setDataSource(this.path);
		this.media.prepare();
	}
	
	this.source = _soundUtils.source.PLAYER;
	
	this.position = {x:0, y:0, z:0};
	this.entity = Player.get();
	this.radius = 5;
	this.volume = vol||1;
	this.media.setVolume(this.volume, this.volume);
	
	this.setVolume=function(vol){
		this.volume = vol;
		
		if(this.source == _soundUtils.source.PLAYER)
			this.media.setVolume(this.volume, this.volume);
	}
	
	this.setInEntity = function(ent, r){
		this.source = _soundUtils.source.ENTITY;
		this.entity = ent;
		this.radius = r;
		_soundUtils.target[this._id] = this.source;
	}
	
	this.setInBlock = function(vector, y, z, r){
		this.source = _soundUtils.source.BLOCK;
		
		if(typeof(vector)=='number'){
			this.position = {
				x:vector+0.5,
				y:y+0.5,
				z:z+0.5
			};
			this.radius = r;
		}else{
			vector.x += 0.5;
			vector.y += 0.5;
			vector.z += 0.5;
			this.position = vector;
			this.radius = y;
		}
		
		_soundUtils.target[this._id] = this.source;
	}
	this.setInPlayer = function(){
		this.source = _soundUtils.source.PLAYER;
		_soundUtils.target[this._id] = this.source;
	}
	
	this.setOnCompletion = function(f, a){
		this.media.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener(){
			onCompletion: function(mp){
				f(a, mp);
			}
		}); 
	};
	
	this.setSource = function(src){
		this.reset();
		this.path = __dir__ + src;
		this.media.setDataSource(this.path);
		this.media.prepare(); 
	};
	
	this.setLooping = function(a){
		this.media.setLooping(a)
	}
	
	this.isLooping = function(){
		return this.media.isLooping()
	}
	
	this.isPlaying = function(){
		return this.media.isPlaying()
	}
	
	this.play = function(){
		if(this.source!=null)
		this.media.start();
	};
	
	this.pause = function(){
		if(this.source!=null)
		this.media.pause();
	};
	
	this.reset = function(){
		if(this.source!=null)
		this.media.reset(); 
	};
	
	this.stop = function(){
		if(!this.path || this.source == null) return false;
		this.media.stop();
		this.media.prepare(); 
	};
	
	this.destroy = function(){
		this.stop();
		this.reset();
		_soundUtils.target[this._id] = _soundUtils.source.NULL;
	}
	
	this._id = _soundUtils.getFreePlayer();
	if(this._id == -1){
		this._id = (_soundUtils.sounds.push(this) - 1);
	}else{
		_soundUtils.sounds[this._id] = this;
	}
	
	_soundUtils.target[this._id] = this.source;
	//_soundUtils.target[_id]
}

var MultiSound = function(params){
	this.components = [];
	for(var i = 0; i < params.length; i++){
		this.components.push(new Sound(params[i].src, params[i].volume||1));
	}
	
	this.setInEntity = function(ent, r){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].setInEntity(ent, r);
		}
	}
	
	this.setInBlock = function(vector, y, z, r){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].setInBlock(vector, y, z, r);
		}
	}
	this.setInPlayer = function(){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].setInPlayer();
		}
	}
	
	
	this.addVolume = function(vol){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].setVolume(this.components[i].volume+vol);
		}
	}
	
	this.setLooping = function(a){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].setLooping(a);
		}
	}
	
	this.play = function(){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].play();
		}
	};
	
	this.pause = function(){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].pause();
		}
	};
	
	this.reset = function(){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].reset();
		}
	};
	
	this.stop = function(){
		for(var i = 0; i < this.components.length; i++){
			this.components[i].stop();
		}
	};
	
	this.destroy = function(){
		for(var i = 0; i < this.destroy.length; i++){
			this.destroy[i].play();
		}
	}
	
}

Callback.addCallback("tick", function () {
	_soundUtils.updateVolume();
});

Callback.addCallback("LevelLeft", function () {
	_soundUtils.leaveWorld();
});

/*Volume in the settings*/
var settings_path = "/storage/emulated/0/games/com.mojang/minecraftpe/options.txt";
var gameVolume = FileTools.ReadKeyValueFile(settings_path)["audio_sound"];
var prevScreen = false;
Callback.addCallback("NativeGuiChanged", function (screen) {
    var currentScreen = screen.startsWith("screen_world_controls_and_settings") || screen.startsWith("screen_controls_and_settings");
    if(prevScreen && !currentScreen){
        gameVolume = FileTools.ReadKeyValueFile(settings_path)["audio_sound"];
    }
    prevScreen = currentScreen;
});

EXPORT("Sound", Sound);
EXPORT("MultiSound", MultiSound);