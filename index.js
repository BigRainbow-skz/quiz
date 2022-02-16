const quiz = [
  {
  question: '櫻坂46のキャプテンは?',
  answers: [
    '渡邉理佐',
    '菅井友香',
    '守屋麗奈',
    '小林由依'
  ],
  correct: '菅井友香'
}, {
  question: 'そこ曲がったら櫻坂のMCの名前は?',
  answers: [
    '土田晃之 & 澤部佑',
    'アンジャッシュ児嶋 & 平成ノブシコブシ吉村',
    '亜門虹彦先生 & 大久保佳代子',
    'はんにゃ金田 & サンシャイン池崎'
  ],
  correct: '土田晃之 & 澤部佑'
}, {
  question: '櫻坂46の3rdシングル「流れ弾」のセンターは誰?',
  answers: [
    '渡邉理佐',
    '森田ひかる',
    '田村保乃',
    '山﨑天'
  ],
  correct: '田村保乃'
}, {
  question: '櫻坂46の4thシングル「五月雨よ」の発売日は?',
  answers: [
    '07/27',
    '01/02',
    '04/06',
    '11/29'
  ],
  correct: '04/06'
},{
  question: '全員が同学年の組み合わせとして正しいのは?',
  answers: [
    '原田葵 & 井上梨名 & 大園玲',
    '守屋麗奈 & 尾関梨香 & 藤吉夏鈴',
    '小池美波 & 菅井友香 & 渡邉理佐',
    '田村保乃 & 関有美子 & 土生瑞穂'
  ],
  correct: '原田葵 & 井上梨名 & 大園玲'
},{
  question: '全員が同じ都道府県出身の組み合わせとして正しいのは?',
  answers: [
    '守屋茜 & 守屋麗奈 & 織田奈那',
    '田村保乃 & 藤吉夏鈴 & 山﨑天',
    '遠藤光莉 & 尾関梨香 & 菅井友香',
    '小池美波 & 井上梨名 & 幸坂茉里乃'
  ],
  correct: '田村保乃 & 藤吉夏鈴 & 山﨑天'
},{
  question: 'W-KEYAKI.FES2021で富士急にケヤキの記念樹が植樹されたがどのアトラクションの入口前でしょう?',
  answers: [
    'ドドンパ',
    'ええじゃないか',
    '高飛車',
    'FUJIYAMA'
  ],
  correct: 'ええじゃないか'
},{
  question: '「それが愛なのね」の歌詞に出てくる生き物は?',
  answers: [
    '蠍',
    '蜘蛛',
    '犬',
    '蝙蝠'
  ],
  correct: '蜘蛛'
},{
  question: '「流れ弾」のカップリングのうちタイプAのみ収録されている曲は?',
  answers: [
    'ソニア',
    '無言の宇宙',
    'ジャマイカビール',
    'On my way'
  ],
  correct: 'ソニア'
},{
  question: '2021年のBACKS LIVEの1曲目は?',
  answers: [
    'それが愛なのね',
    "Nobody's fault",
    'Plastic regret',
    'Microscope'
  ],
  correct: "Nobody's fault"
},{
  question: '1stツアーで「無言の宇宙」が初披露された会場は?',
  answers: [
    '丸善インテックアリーナ',
    '西日本総合展示場',
    'さいたまスーパーアリーナ',
    'Aichi Sky Expo'
  ],
  correct: '丸善インテックアリーナ'
},

]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setUpQuiz = ()=>{
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
buttonIndex++;
}
}

setUpQuiz();

const clickHander = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }else{
    window.alert('不正解!');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setUpQuiz();
  }else{
    window.alert('終了! お疲れ様でした! あなたの正解数は' + score + '/' + quizLength + 'です!');
}
};

//ボタンを押したら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
$button[handlerIndex].addEventListener('click', (e)=>{
  clickHander(e);
});
handlerIndex++;
}
