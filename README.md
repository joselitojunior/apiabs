# APIabs

**APIabs** é um módulo que oferece uma camada de abstração simplificada para chamadas HTTP utilizando o Axios. Ele facilita a construção de serviços API robustos e reutilizáveis, mantendo um design modular e extensível.

## Principais funcionalidades:

- **Abstração do Axios**: Simplifica a configuração de rotas, cabeçalhos, parâmetros e autenticação.
- **Foco em reusabilidade**: Ideal para criar serviços API com métodos padronizados.
- **Extensível**: Adicione sua lógica personalizada estendendo a classe base.
- **Orientação a tipos**: Desenvolvido com TypeScript para maior segurança e autocompletar inteligente.

## Casos de uso:

- Consumir APIs REST no frontend ou backend.
- Centralizar chamadas API em projetos com múltiplos serviços.
- Reduzir repetição de código em aplicações modernas.

## Instalação

Use o npm ou yarn para instalar a biblioteca no seu projeto:

```bash
npm install apiabs
```

## Exemplo de uso

```bash
import apiabs from "apiabs";

interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService extends apiabs {
    constructor() {
        super({ baseURL: '<URL>:<PORT>' });
    }

    async getUser(id: number) {
        return await this.get<User>({ route: `/user/${id}` });
    }
}

async function main() {
    const userService = new UserService();
    const response = await userService.getUser(1);
    if (response.isOk) {
      const user = response.data;
      console.log(user);
    }
}

main();
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções para o projeto. Para isso, basta realizar um fork do repositório, fazer suas alterações e abrir um pull request.
