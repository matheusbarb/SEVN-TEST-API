"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var news = [
    {
        id: 1,
        title: "Economia",
        content: "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
        imagemUrl: "/",
    },
    {
        id: 2,
        title: "Educação",
        content: "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
        imagemUrl: "/",
    },
    {
        id: 3,
        title: "Diversidades",
        content: "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    },
];
//First Endpoint
app.get("/news", function (req, res) {
    res.json(news);
});
//Second Endpoint
app.get('/news/:id/content', function (req, res) {
    var id = parseInt(req.params.id);
    var article = news.find(function (item) { return item.id === id; });
    if (!article)
        return res.status(404).json({ mensagem: 'Notícia não encontrada' });
    res.json({ content: article.content });
});
// Third Endpoint
app.get('/article', function (_, res) {
    var article = {
        id: 1,
        content: 'Banco Central libera consulta a dinheiro esquecido em bancos O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos "esquecidos" nos bancos poderá eventualmente ter nas próximas fases do sistema. Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo). "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1. Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. Banco Central libera consulta de dinheiro "esquecido" em bancos: saiba como fazer Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados "ao longo de 2022". Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.',
        data: '13/02/2022 as 16h30',
    };
    res.json(article);
});
app.listen(port, function () {
    console.log("Servidor rodando em http://localhost:".concat(port));
});
