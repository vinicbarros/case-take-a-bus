# Case Take a Bus
Esse projeto é parte de um processo seletivo da Take a Bus para a vaga de Full Stack Engineer.

O objetivo dessa case era criar uma aplicação em React Native contendo um mapa, sem nenhuma outra informação, apenas com um botão switch
que controla a visualização de pontos de ônibus próximos a localização atual do usuário.

## Requisitos da case:
- [x] Conter um mapa
- [x] Um botão switch para controlar a visualização
dos pontos de ônibus próximos
- [x] Visualizar os pontos de ônibus mais próximos

## Funcionalidades da aplicação:

- [x] Tela de loading
- [x] Mapa com um estilo customizado (Criei um estilo personalizado de mapa)
- [x] Botão de switch que faz requisições para a API
- [x] Visualizar os pontos de ônibus mais próximos ao usuário

### Como rodar a aplicação
<hr>

1. Clone o projeto

```bash
  git clone https://github.com/vinicbarros/case-take-a-bus.git
```

2. Vá para o diretório do projeto

```bash
  cd case-take-a-bus
```

3. Instale as dependências

```bash
  npm install
```

4. Crie um arquivo chamado `.env` na pasta raiz do projeto (onde fica o `package.json` e o `.env.example`)

5. Popule o `.env` de acordo com o `.env.example` **(OBS: Se você optar por rodar a API localmente, utilize seu endereço IPV4 como url, e não se esqueça de colocar a porta rodando a API).**

6. Se você optar por rodar o projeto usando o deploy da API, cole esta `BASE_URL` no seu `.env` 

```bash
  BASE_URL=https://case-take-a-bus-api-production.up.railway.app
```

7. Rode a aplicação

```bash
  npm run start
```

## Ferramentas utilizadas:

- [x] Expo 
- [x] Expo Location
- [x] React Native
- [x] TypeScript
- [x] React Native Maps
