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
app.get("/api/home", function (req, res) {
    res.json(news);
});
app.listen(port, function () {
    console.log("Servidor rodando em http://localhost:".concat(port));
});
