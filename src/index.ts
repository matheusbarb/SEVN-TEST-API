import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

interface News {
  id: number;
  title: string;
  content: string;
  imagemUrl?: string;
}

let news: News[] = [
  {
    id: 1,
    title: "Economia",
    content:
      "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
    imagemUrl:
      "https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnRGIa6fjSVTdZh~b~Krxm1HJbaWHIHDNrE-S9YwnxANW-1AhywwKb5AXdciC5-yXMNEOhO6cpCtPcTF0OZQO6I8yOozhuoNKjwUVydTwc3BgGs7dl1Un2kpvkM5dtOqXdazzbYU5CLM5~dh3KdKctX3FeESXfHE-XJ0ftMjIrdpBanGmhmil0uvpJct5f~CJQcXt9MVq0fuamTxV0H6m5OttVKlqRHvIVgPPooL0~oJkpZoaB92L1paX9pQar7kRwlSvgNUHT9g7doe-Op-a-1S08WdkvwWMFQzGAPQR7eLs2JtDA5AaZqmKEWZZp1v5PgYKkmpVSn6JhuzAPAr0w__",
  },
  {
    id: 2,
    title: "Educação",
    content:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    imagemUrl:
      "https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwAuz4SldGR7BUK9ODNzxRKuVOP5I8xGMxPQYjm5TNj62ucEgjEA9dFiF7oPDL0SgWXa7MIqWj2Pww7lQdOLXhMt2jdQiqcDg6z2gEnXs5GMJH4Lyh~23Ku8uwsMFGL5Uz8Cn8ozOZqI0wrrSuyBDIZeZj8yXtpdFgG8RvwUhzNyDE8coF690cWEetHlS1lGA2~KBqgoujjf3eXaHh01Srn2sey~dqdGAoGlIx4dvL9Y6sJxW~eumXrQJ4cbpt~Y0txsaXy0f4UONuREREat0UH0UsaAUwDnbvZcDlRNjCbQ8LLnaHvCI4PdaVtb38wx0DtKc6-rURicUKnu5DPKsg__",
  },
  {
    id: 3,
    title: "Diversidades",
    content:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
  },
];

//First Endpoint
app.get("/news", (req: Request, res: Response) => {
  res.json(news);
});

//Second Endpoint

app.get("/news/:id/:field", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const field = req.params.field as keyof News;
  const article = news.find((item) => item.id === id);
  if (!article) return res.status(404).json({ mensagem: "Notícia não encontrada" });
  if (!(field in article)) return res.status(400).json({ mensagem: "Campo inválido" });
  res.json({ [field]: article[field] });
});

// Third Endpoint
app.get("/article", (_, res: Response) => {
  const article = {
    id: 1,
    subtitle: "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
    content: `
    Banco Central libera consulta a dinheiro esquecido em bancos.
    O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos "esquecidos" nos bancos poderá eventualmente ter nas próximas fases do sistema. 
     Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo). 
     "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1. 
     Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões.
    Banco Central libera consulta de dinheiro "esquecido" em bancos: saiba como fazer. 
    Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados "ao longo de 2022". Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.
  `,
    data: "13/02/2022 as 16h30, Por: Redação",
  };
  res.json(article);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
