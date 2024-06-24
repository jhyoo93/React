export default function handler(request, response) {
  switch (request.method) {
    case 'POST':
      response.status(201).send({
        title: '위키피디아 Next.js',
        url: 'https://en.wikipedia.org/wiki/Next.js',
      });
      break;

    case 'GET':
      response.send([
        {
          id: 'abc',
          title: '위키피디아 Next.js',
          url: 'https://en.wikipedia.org/wiki/Next.js',
        },
        {
          id: 'def',
          title: '코드잇 자유게시판',
          url: 'https://codeit.kr/community/general',
        },
        {
          id: 'def',
          title: '코드잇 자유게시판',
          url: 'https://codeit.kr/community/questions',
        },
      ]);
      break;  

    default:
      response.status(404).send();  
  }
  response.send(request.method);

}