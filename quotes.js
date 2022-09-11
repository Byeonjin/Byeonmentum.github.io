const quotes = [
    {
        quote: "세상에서 가장 아름답고 소중한 것은 보이거나 만져지지 않는다. 단지 가슴으로만 느낄 수 있다.",
        author: "헬렌 켈러",
    },
    {
        quote: "때를 놓치지 말라. 이 말은 인간에게 주어진 영원한 교훈이다. 그러나 인간은 이것을 그리 대단치 않게 여기기 때문에 좋은 기회가 와도 그것을 잡을 줄 모르고 때가 오지 않는다고 불평만 한다.",
        author: "A. 카네기",
    },
    {
        quote: "현재에 열중하라. 오직 현재 속에서만 인간은 영원을 알 수 있다.",
        author: "괴테",
    },
    {
        quote: "자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
        author: "로잘린 카터",
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스",
    },
    {
        quote: "자신의 길을 잃은 사람들을 만나거든 관대하게 대하라. 길 잃은 영혼에게서 나오는 것은 무지와 자만, 노여움과 질투, 욕망뿐이니 그들이 제 길로 갈 수 있도록 그들을 위해서 기도하라.",
        author: "인디안 명언",
    },
    {
        quote: "자신의 능력을 감추지 마라. 재능은 쓰라고 주어진 것이다. 그늘 속의 해시계가 무슨 소용이랴.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "내가 보기에 사람들은 엄청난 잠재력을 가지고 있다. 많은 이들이 자신감을 갖거나 위험을 무릅 쓴다면 위대한 일을 해낼 수 있다. 하지만 대부분 그러지 못한다. 사람들은 TV앞에 앉아 삶은 영원할 것이라 생각한다.",
        author: "필립 애덤스",
    },
    {
        quote: "멈추지 말고 한가지 목표에 매진하라. 그것이 성공의 비결이다.",
        author: "안나 파블로바",
    },
    {
        quote: "안전이란 대개 미신이다. 그것은 사실상 존재하지 않는다. 인생은 대담한 모험이거나 아니면 아무것도 아니다.",
        author: "헬렌켈러"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;