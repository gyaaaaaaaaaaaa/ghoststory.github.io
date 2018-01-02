window.onload = function onLoad(){
  //end
  var end = "結局あれが一体何だったのか、未だによくわからないそうだ。";

  //1
  var scene_1 = ["友達", "友達の友達", "同僚", "会社の上司", "親戚の叔父さん", "親戚の叔母さん", "お爺ちゃん", "お婆ちゃん"];
  var scene_1_random = Math.floor(Math.random() * scene_1.length);
  var target_scene_1 = document.getElementById("scene_1_id");
    target_scene_1.innerHTML = scene_1[scene_1_random] + "が体験したという話。";

  //2
  var time_1 = ["車に乗って、近所の", "車で20分ほどの", "車で40分ほどの", "車で1時間ほどの", "車で2時間ほどの"];
  var time_1_random = Math.floor(Math.random() * time_1.length);
  var location_1 = ["廃校", "廃病院", "トンネル", "お寺", "遺跡", "キャンプ場", "採石場", "墓地", "海", "森", "山", "建設現場", "公園", "自動車修理工場", "葬儀場", "駐車場", "ボウリング場跡", "廃遊園地", "立体駐車場"];
  var location_1_random = Math.floor(Math.random() * location_1.length);
  var target_scene_2 = document.getElementById("scene_2_id");
    target_scene_2.innerHTML = "ある夏の深夜、男女数人で" + time_1[time_1_random] + location_1[location_1_random] + "に肝試しに行くことになった。";

  //3
  var character_1 = ["メンバーの中に1人、霊を信じない男Aがいた。", "メンバーは心霊体験など縁がない人間ばかりだった。", "メンバーの中に1人、自称「霊感のある」女Aがいた。"];
  var character_1_random = Math.floor(Math.random() * character_1.length);
  var target_scene_3 = document.getElementById("scene_3_id");
    target_scene_3.innerHTML = character_1[character_1_random];

      //4
      if (character_1[character_1_random] === "メンバーの中に1人、霊を信じない男Aがいた。") {
        var scene_4 = ["に着くやいなや、Aは近くにあった盛り塩を足で蹴っ飛ばした。"];
        var scene_4_random = Math.floor(Math.random() * scene_4.length);
        var target_scene_4 = document.getElementById("scene_4_id");
          target_scene_4.innerHTML = location_1[location_1_random] + scene_4[scene_4_random];
      } else if (character_1[character_1_random] === "メンバーは心霊体験など縁がない人間ばかりだった。") {
        var scene_4 = ["に着くと、メンバーの1人が近くにあった盛り塩を足で踏んで崩してしまった。", "に着くと、メンバーの1人が体調の異変を訴え始めた。"];
        var scene_4_random = Math.floor(Math.random() * scene_4.length);
        var target_scene_4 = document.getElementById("scene_4_id");
          target_scene_4.innerHTML = location_1[location_1_random] + scene_4[scene_4_random];
      } else if (character_1[character_1_random] === "メンバーの中に1人、自称「霊感のある」女Aがいた。") {
        var scene_4 = ["に着くと、Aが泣き出した。", "に着くと、Aの表情や言葉遣いが豹変した。"];
        var scene_4_random = Math.floor(Math.random() * scene_4.length);
        var target_scene_4 = document.getElementById("scene_4_id");
          target_scene_4.innerHTML = location_1[location_1_random] + scene_4[scene_4_random];
      }

  //5
  var ghost_1 = ["白い服を着た女", "赤い服を着た女", "黒い人形の影のようなもの", "白いもやのようなもの", "旧日本兵の軍服を着た男", "ランドセルを背負った男の子", "ランドセルを背負った女の子"];
  var ghost_1_random = Math.floor(Math.random() * ghost_1.length);
  var target_scene_5 = document.getElementById("scene_5_id");
    target_scene_5.innerHTML = "パッと前を見ると" + ghost_1[ghost_1_random] + "が見えた。";

  //6
  var scene_6 = ["皆パニックになりながら急いで車に乗り、アクセルを踏んで逃げた。", "皆パニックになり、車を置いて一目散に逃げた。"];
  var scene_6_random = Math.floor(Math.random() * scene_6.length);
  var target_scene_6 = document.getElementById("scene_6_id");
    target_scene_6.innerHTML = scene_6[scene_6_random];

      //7_例を信じない男Aがいる
      if (scene_6[scene_6_random] === "皆パニックになりながら急いで車に乗り、アクセルを踏んで逃げた。" && character_1[character_1_random] === "メンバーの中に1人、霊を信じない男Aがいた。") {
        var scene_7 = ["はなんと後ろから追ってきていた。しかもなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。", "の姿はなかった。しかしなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。"];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = "逃げながら後ろを振り返ると、" + ghost_1[ghost_1_random] + scene_7[scene_7_random];
      } else if (scene_6[scene_6_random] === "皆パニックになり、車を置いて一目散に逃げた。" && character_1[character_1_random] === "メンバーの中に1人、霊を信じない男Aがいた。") {
        var scene_7 = ["後日聞く所によると、肝試し以来Aの挙動がおかしいらしい。", "後日、Aは死亡したらしい。", "後日、Aは行方不明になったらしい。", "肝試し以来、Aは自宅に篭りっきりらしい。", end];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = scene_7[scene_7_random];
      //7_何の変哲もないメンバーのみ
      } else if (scene_6[scene_6_random] === "皆パニックになりながら急いで車に乗り、アクセルを踏んで逃げた。" && character_1[character_1_random] === "メンバーは心霊体験など縁がない人間ばかりだった。") {
        var scene_7 = ["はなんと後ろから追ってきていた。しかもなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。", "の姿はなかった。しかしなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。" ,"の姿はなかった。そのまま知人の霊媒師の家に行き、お祓いをしてもらった。", "の姿はなかった。そのまま知人が勤めているお寺に行き、お祓いをしてもらった。"];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = "逃げながら後ろを振り返ると、" + ghost_1[ghost_1_random] + scene_7[scene_7_random];
      } else if (scene_6[scene_6_random] === "皆パニックになり、車を置いて一目散に逃げた。" && character_1[character_1_random] === "メンバーは心霊体験など縁がない人間ばかりだった。") {
        var scene_7 = ["そのまま知人が勤めているお寺に行き、お祓いをしてもらった。", "後日、肝試しに参加したメンバーは半分以上死亡したらしい。" + end, end];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = scene_7[scene_7_random];
      //7_自称「霊感のある」女Aがいる
      } else if (scene_6[scene_6_random] === "皆パニックになりながら急いで車に乗り、アクセルを踏んで逃げた。" && character_1[character_1_random] === "メンバーの中に1人、自称「霊感のある」女Aがいた。") {
        var scene_7 = ["はなんと後ろから追ってきていた。しかもなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。", "の姿はなかった。しかしなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。" + end ,"Aが異形の解説をしてくれたが、聞きなれない単語が多くよくわからなかったらしい。"];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = "逃げながら後ろを振り返ると、" + ghost_1[ghost_1_random] + scene_7[scene_7_random];
      } else if (scene_6[scene_6_random] === "皆パニックになり、車を置いて一目散に逃げた。" && character_1[character_1_random] === "メンバーの中に1人、自称「霊感のある」女Aがいた。") {
        var scene_7 = ["Aが異形の解説をしてくれたが、聞きなれない単語が多くよくわからなかったらしい。", end];
        var scene_7_random = Math.floor(Math.random() * scene_7.length);
        var target_scene_7 = document.getElementById("scene_7_id");
          target_scene_7.innerHTML = scene_7[scene_7_random];
      }

        //8_霊を信じない男Aがいる
        if (scene_6[scene_6_random] === "皆パニックになりながら急いで車に乗り、アクセルを踏んで逃げた。" && scene_7[scene_7_random] === "はなんと後ろから追ってきていた。しかもなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。" || "の姿はなかった。しかしなぜか施錠していた車の中に崩した盛り塩らしきものが散らばっていた。" && character_1[character_1_random] === "メンバーの中に1人、霊を信じない男Aがいた。") {
          var scene_8 = ["後日聞く所によると、肝試し以来Aの挙動がおかしいらしい。", "後日、Aは死亡したらしい。", "後日、Aは行方不明になったらしい。", "肝試し以来、Aは自宅に篭りっきりらしい。", end];
          var scene_8_random = Math.floor(Math.random() * scene_8.length);
          var target_scene_8 = document.getElementById("scene_8_id");
            target_scene_8.innerHTML = scene_8[scene_8_random];
        //8_何の変哲もないメンバーのみ
      }

}
