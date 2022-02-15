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
    '土原紀香 & 澤辺裕',
    '亜門虹彦 & 澤部祐',
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
}

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
