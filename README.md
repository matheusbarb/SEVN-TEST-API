# API de Notícias - SEVN

Esta é uma API de exemplo criada para um teste de vaga fullstack na empresa SEVN. A API foi desenvolvida utilizando Node.js e Express, e permite consultar notícias e artigos.

## Endpoints

### 1. Listar todas as notícias

**GET** `/news`

Este endpoint retorna uma lista de todas as notícias disponíveis.

#### Resposta

```json
[
  {
    "id": 1,
    "title": "Economia",
    "content": "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
    "imagemUrl": "https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnRGIa6fjSVTdZh~b~Krxm1HJbaWHIHDNrE-S9YwnxANW-1AhywwKb5AXdciC5-yXMNEOhO6cpCtPcTF0OZQO6I8yOozhuoNKjwUVydTwc3BgGs7dl1Un2kpvkM5dtOqXdazzbYU5CLM5~dh3KdKctX3FeESXfHE-XJ0ftMjIrdpBanGmhmil0uvpJct5f~CJQcXt9MVq0fuamTxV0H6m5OttVKlqRHvIVgPPooL0~oJkpZoaB92L1paX9pQar7kRwlSvgNUHT9g7doe-Op-a-1S08WdkvwWMFQzGAPQR7eLs2JtDA5AaZqmKEWZZp1v5PgYKkmpVSn6JhuzAPAr0w__"
  },
  {
    "id": 2,
    "title": "Educação",
    "content": "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    "imagemUrl": "https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwAuz4SldGR7BUK9ODNzxRKuVOP5I8xGMxPQYjm5TNj62ucEgjEA9dFiF7oPDL0SgWXa7MIqWj2Pww7lQdOLXhMt2jdQiqcDg6z2gEnXs5GMJH4Lyh~23Ku8uwsMFGL5Uz8Cn8ozOZqI0wrrSuyBDIZeZj8yXtpdFgG8RvwUhzNyDE8coF690cWEetHlS1lGA2~KBqgoujjf3eXaHh01Srn2sey~dqdGAoGlIx4dvL9Y6sJxW~eumXrQJ4cbpt~Y0txsaXy0f4UONuREREat0UH0UsaAUwDnbvZcDlRNjCbQ8LLnaHvCI4PdaVtb38wx0DtKc6-rURicUKnu5DPKsg__"
  },
  {
    "id": 3,
    "title": "Diversidades",
    "content": "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje"
  }
]
```

### 2. Consultar um campo específico de uma notícia pelo ID

GET `/news/:id/:field`

Este endpoint permite consultar um campo específico (`title`, `content` ou `imagemUrl`) de uma notícia pelo seu ID.

Parâmetros
`id`: ID da notícia
`field`: Campo a ser consultado (title, content ou imagemUrl)

Resposta
```json
{
  "title": "Economia"
}
```
### 3. Consultar um artigo específico

GET `/article`

Este endpoint retorna um artigo específico com seu conteúdo detalhado.

```json
{
  "id": 1,
  "subtitle": "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
  "content": "Banco Central libera consulta a dinheiro esquecido em bancos. O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos \"esquecidos\" nos bancos poderá eventualmente ter nas próximas fases do sistema. Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo). \"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases\", informou o BC ao ser questionado pelo g1. Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. Banco Central libera consulta de dinheiro \"esquecido\" em bancos: saiba como fazer. Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados \"ao longo de 2022\". Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.",
  "data": "13/02/2022 as 16h30, Por: Redação"
}
```

### Instalação e Execução

Pré-requisitos
- Node.js
- npm ou yarn

## Passos

1. Clone o repositório:

git clone https://github.com/matheusbarb/SEVN-TEST-API.git

2. Navegue até o diretório do projeto:

cd SEVN-TEST-API

3. Instale as dependências: 

npm install
# ou
yarn install

4. Inicie o servidor

npm start
# ou
yarn start

O servidor estará rodando em `http://localhost:3001`.

### Observações

- A API foi desenvolvida como parte de um teste para uma vaga fullstack na empresa SEVN.
- As notícias e o artigo retornados são estáticos e servem apenas para fins de demonstração.

### Contato

Para mais informações, entre em contato com matheusbarbosacontato00@gmail.com


Esse `README.md` fornece uma descrição detalhada dos endpoints disponíveis, exemplos de resposta, instruções de instalação e execução, e um contexto sobre o propósito da API.




