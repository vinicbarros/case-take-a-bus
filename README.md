<div align="center"><img src="https://i.imgur.com/rgB70iD.png"></img></div>
<hr>
<h1 align=center>Case Take a Bus</h1>

Esse projeto é parte de um processo seletivo da Take a Bus para a vaga de Full Stack Engineer.

O objetivo desse case era criar uma aplicação em React Native contendo um mapa, sem nenhuma outra informação, apenas com um botão switch
que controla a visualização de pontos de ônibus próximos a localização atual do usuário.

<hr>
<div align=center style="display:flex; justify-content: center;">
    <img src="./src/assets/video/showcase.gif" style="width: 300px">
</div>
<hr>

## Requisitos do case:

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

**Se você não quiser rodar a API localmente, pule para a etapa 7. (Recomendado)**

4. (Opcional) Se você optar por rodar a API localmente, utilize seu endereço IPV4 como url, não se esqueça de colocar a porta que está rodando a API também. Ex: `123.456.11.2:4000`. Se você não sabe qual o seu endereço IPV4, primeiro rode a aplicação:

```bash
  npm run start
```

5. (Opcional) Espere terminar de rodar e procure no seu terminal a linha `Metro waiting on ....`, a url que aparecer é o seu endereço IPV4, cole seu IPV4 no `.env` e troque a porta que apareceu no terminal pela porta que sua API está rodando. Ficará algo como: `BASE_URL=http://XXX.XXX.XX.X:5000`.

```bash
› Metro waiting on exp://XXX.XXX.XX.X:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands
```

6. (Opcional) Siga as instruções de como rodar a API localmente por aqui: <a href="https://github.com/vinicbarros/case-take-a-bus-api">Como rodar a API Localmente.</a>

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
