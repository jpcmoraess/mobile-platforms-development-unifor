# Busca de Filmes (TMDB)

App em React Native (Expo) que busca filmes pelo nome na API do [The Movie Database](https://developer.themoviedb.org/docs) e mostra pôster, nota e sinopse em português.

Desenvolvido na disciplina de Desenvolvimento de Plataformas Móveis (Unifor). O projeto foi criado no Expo Snack e migrado para este repositório.

## Funcionalidades

- Busca pelo botão ou pela tecla de busca do teclado, que é fechado ao buscar
- Indicador de carregamento durante a requisição
- Mensagens para campo vazio, falha de rede ou chave inválida e busca sem resultados
- Lista com `FlatList`, com espaço reservado quando o filme não tem pôster

## Tecnologias

React Native, Expo, Fetch API e API REST do TMDB.

## Como executar

Requer Node.js e uma chave gratuita da API do TMDB.

```bash
cd tmdb-busca-filmes
npm install
cp .env.example .env
```

Coloque sua chave no `.env` e rode `npx expo start`. Abra no celular pelo app Expo Go, lendo o QR code.
