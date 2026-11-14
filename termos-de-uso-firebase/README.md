# Termos de Uso com persistência local e em nuvem

Tela de aceite de termos de uso em React Native (Expo) que grava o aceite no próprio aparelho (AsyncStorage) e no Firebase Firestore.

Desenvolvido na disciplina de Desenvolvimento de Plataformas Móveis (Unifor). O projeto foi criado no Expo Snack e migrado para este repositório.

## Como funciona

- O botão Continuar só é liberado depois que o usuário marca o checkbox
- Cada aparelho recebe um ID gerado uma única vez e guardado no AsyncStorage
- O aceite (versão dos termos, data e ID do aparelho) é gravado localmente e no Firestore em paralelo, com `Promise.allSettled`
- Se só a gravação local der certo, o usuário é avisado de que a sincronização com o servidor ficou pendente; se a local falhar, ele é avisado para tentar de novo
- Checkbox com `accessibilityRole` e `accessibilityState` para leitores de tela

## Tecnologias

React Native, Expo, React Navigation, AsyncStorage e Firebase Firestore.

## Como executar

Requer Node.js e um projeto no Firebase com o Firestore ativado.

```bash
cd termos-de-uso-firebase
npm install
cp .env.example .env
```

Preencha o `.env` com a configuração do seu app web do Firebase (Configurações do projeto > Seus apps) e rode `npx expo start`.
