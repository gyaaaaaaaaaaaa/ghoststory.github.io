var scene =  {
  scene_00001_00001: "霊を信じない男Aがいる",
  scene_00002_00001: "男Aが故意に禁忌を犯す",
  scene_00003_00001: "異形の存在を目撃する",
  scene_00004_00001: "車で逃げる",
  scene_00004_00002: "走って逃げる",
  scene_00005_00001: "追ってくる",
  scene_00006_00001: "パーキングで異形の痕跡を発見する",
  scene_00007_00001: "最近男Bの挙動がおかしい",
  scene_00008_00001: "後日男Aは死亡する",
  scene_00008_00002: "後日男Aは行方不明になる",
  scene_00008_00003: "後日男Aは自宅に籠る",
  scene_00009_00001: "最近男Bの挙動がおかしかった"
};

var route = [
  [scene.scene_00001_00001, scene.scene_00002_00001, scene.scene_00003_00001, scene.scene_00004_00001, scene.scene_00005_00001, scene.scene_00006_00001, scene.scene_00007_00001, scene.scene_00008_00001],
];

var route_random = Math.floor(Math.random() * route.length);
var route_length = route[route_random].length;

var id_number = [
  {id_number: "1"},
  {id_number: "2"},
  {id_number: "3"},
  {id_number: "4"},
  {id_number: "5"},
  {id_number: "6"},
  {id_number: "7"},
  {id_number: "8"},
  {id_number: "9"},
  {id_number: "10"},
];

for (const i in id_number) {
  $("#scene_" + id_number[i].id_number).text(route[route_random][i]);
};
