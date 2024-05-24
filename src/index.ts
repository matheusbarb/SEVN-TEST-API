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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//Second Endpoint

app.get('/news/:id/content', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const article = news.find(item => item.id === id);
    if (!article) return res.status(404).json({ mensagem: 'Notícia não encontrada' });
    res.json({ content: article.content });
});
