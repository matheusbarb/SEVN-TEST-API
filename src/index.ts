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
    imagemUrl: "/",
  },
  {
    id: 2,
    title: "Educação",
    content:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    imagemUrl: "/",
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

app.get('/news/:id/content', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const article = news.find(item => item.id === id);
    if (!article) return res.status(404).json({ mensagem: 'Notícia não encontrada' });
    res.json({ content: article.content });
});

// Third Endpoint
app.get('/article', (_, res: Response) => {
    const article = {
        id: 1,
        content: 'Banco Central libera consulta a dinheiro esquecido em bancos O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos "esquecidos" nos bancos poderá eventualmente ter nas próximas fases do sistema. Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo). "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1. Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. Banco Central libera consulta de dinheiro "esquecido" em bancos: saiba como fazer Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados "ao longo de 2022". Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.',
        data: '13/02/2022 as 16h30',
       
    };
    res.json(article);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });