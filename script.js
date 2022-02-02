const qes = [];
//各質問のラジオボタンを入れた配列(qes)をつくる
//qes[1] = [{ボタン},{ボタン}...]
for(let i = 1 ; i < 6 ; i++) {  
 let data = document.getElementsByName("answer" + i)
 qes[i] = data;
}

//診断結果ボタンの要素を取得
const button = document.getElementById("mybutton")

//各質問のラジオボタンのどれが選択されているか確認
function check(){
  const ans = [];
  for(let i = 1 ; i < 6 ; i++) {
    for (const arr of qes[i]){
      if(arr.checked) {
        ans.push(arr.value);
      }
    }
  }
  result(ans)
}

//診断ボタンが押されたら
button.addEventListener("click",check);

//閉じるボタン、モ―ダルウインドウ、マスクの要素を取得
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const mask = document.getElementById("mask");

//ここから結果を出す
function result(data){
  if (data.length !== 5) {
    alert("質問を全て選択してね！")
  } else {
    //各質問の答えに応じて値を追加する
    const cnt = {goku:0 , beji:0 , bar:0 , para:0 , buro:0}
    for(const arr of data) {
      if (arr === "goku") {
        cnt.goku += 1; 
      } else if (arr === "beji") {
        cnt.beji += 1;
      } else if (arr === "bar") {
        cnt.bar += 1;
      } else if (arr === "para") {
        cnt.para += 1;
      } else {
        cnt.buro += 100;
      }
    }
    
    //悟空から値を比較する
    let max = 0;
    let name = ""; 
    for (const key in cnt) {
      if (cnt[key] > max) {
        max = cnt[key];
        name = key;
      }
    }
    
    //モーダルに入れるHTML要素を取得
    const H1 = document.getElementById("H1");
    const img = document.getElementById("actualImg")
    const P1 = document.getElementById("P1");
    const P2 = document.getElementById("P2");
    const P3 = document.getElementById("P3");
    
    //値をカウントしてたオブジェクトを使用して名前が一致したキャラのコメントを代入
    for (const key in cnt){
      if (name === key) {
        H1.textContent = eval(name + "H1");
        P1.textContent = eval(name + "P1");
        P2.textContent = eval(name + "P2");
        P3.textContent = eval(name + "P3");
        img.src = eval(name + "Img");
      }
    }
    //診断をクリックしたらモーダルとマスクを登場させる
    modal.classList.remove("hidden");
    mask.classList.remove("hidden"); 
  }
}
//閉じるをクリックしたらモーダルとマスクを非表示にする
close.addEventListener("click",function(){
  modal.classList.add("hidden");
  mask.classList.add("hidden");
});

//コメントと画像URL格納場所
const gokuH1 = "あなたは悟空タイプです！"
const gokuImg ="dr11.jpg"
const gokuP1 = "あなたは戦いが大好きで優しいサイヤ人です！"
const gokuP2 = "仲間思いですが、少し楽観的な所があるでしょう！"
const gokuP3 = "何事も油断大敵です。"

const bejiH1 = "あなたはベジータタイプです！"
const bejiImg ="20200610180337.jpg"
const bejiP1 = "あなたは誇り高きサイヤ人の王です！"
const bejiP2 = "努力家でもあり、家族をとても大切にしています"
const bejiP3 = "頑張りすぎには注意してください！"

const paraH1 = "あなたはパラガスタイプです！"
const paraImg ="kono-hoshi-wo-riyou-shitanoda.png"
const paraP1 = "あなたは野望に満ちたサイヤ人です"
const paraP2 = "自分の目的の為なら様々な事を犠牲に出来る精神の持ち主です"
const paraP3 = "リーダーシップも取れる客観的な視点の持ち主！"

const barH1 = "あなたはバーダックタイプです！"
const barImg ="20150730173614.png"
const barP1 = "あなたはたった一人で困難に立ち向かったサイヤ人です"
const barP2 = "普段はとてもクールですが、友達を大切にする人です"
const barP3 = "クールすぎる態度が相手を傷つけない様に注意しましょう"

const buroH1 = "あなたはブロリータイプです！"
const buroImg ="35b398ca-s.png"
const buroP1 = "あなたは南の銀河を破壊しつくしたサイヤ人です"
const buroP2 = "もしかして最近ストレスが溜まっていませんか？"
const buroP3 = "怒りに身を任せて破壊しつくさない様に注意しましょう"
