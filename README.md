# locadora-jpw

## Autor
Alisson Schmitz de Medeiros

## Dependecias:

"cors": "^2.8.5",
"express": "^4.17.1",
"mongoose": "^5.12.10",
"nodemon": "^2.0.7"

Recursos: Adultos; Filmes; Series; User; Autenticacao;

## INSTALAÇÃO
Para instalar, executar o comando "npm i". Após isso, navegar até a pasta /src e executar "node index.js".

## ENDPOINTS
    ### ADULTOS ###    
        ### Modelo de Dado
            {
              numero: { type: Number, required: true },
              nome: { type: String,required: true },
              valor: { type: Number, required: true },
            }

        ### GET
            #### Requisição
            localhost:8000/adultos?userId=<$USER_ID>&token=<$TOKEN>

            #### Erros
            401 - Não autorizado
            500 - Erro ao buscar faixa adultos
            #### Filtros
            skip: localhost:8000/adultos?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/adultos?userId=<replace>&token=<replace>&limit=<replace> 
            name: localhost:8000/adultos?userId=<replace>&token=<replace>&name=<replace>

        ### POST
            #### Requisição
            localhost:8000/adultos?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            422 - Campos inválidos

        ### PUT
            #### Requisição
            localhost:8000/adultos/:id?userId=<replace>&token=<replace>
            
            #### Erros
            401 - Não autorizado
            404 - Faixa adultos não encontrada

        ### DELETE
            #### Requisição 
            localhost:8000/adultos/:id?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            404 - Faixa adultos não encontrada

    ### FILMES ###
        ### Modelo de Dado
            {
                numero: { type: String, required: true },
                nome: { type: String, required: true },
                valor: { type: Number, required: true },
                ano: { type: Number, required: true },
            }

        ### GET
            #### Requisição
            localhost:8000/filmes?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            500 - Erro ao buscar filmes
            #### Filtros
            skip: localhost:8000/filmes?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/filmes?userId=<replace>&token=<replace>&limit=<replace> 
            name: localhost:8000/filmes?userId=<replace>&token=<replace>&name=<replace>

        ### POST
            #### Requisição
            localhost:8000/filmes?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            422 - Campos inválidos

        ### PUT
            #### Requisição
            localhost:8000/filmes/:id?userId=<replace>&token=<replace>
            
            #### Erros
            401 - Não autorizado
            404 - Filme não encontrado

        ### DELETE
            #### Requisição
            localhost:8000/filmes/:id?userId=<replace>&token=<replace>

            #### Erros
            01 - Não autorizado
            404 - Filme não encontrado

    ### SERIES ####
        ### Modelo de Dado
            {
                numero: { type: String, required: true },
                nome: { type: String, required: true },
                valor: { type: Number, required: true },
                ano: { type: Number, required: true },
            }
        
        #### Requisição
            localhost:8000/series?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            500 - Erro ao buscar series
            #### Filtros
            skip: localhost:8000/series?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/series?userId=<replace>&token=<replace>&limit=<replace> 
            type: localhost:8000/series?userId=<replace>&token=<replace>&type=<replace>
        
        ### POST
            #### Requisição
            localhost:8000/series?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            422 - Campos inválidos
       
        ### PUT
            #### Requisição
            localhost:8000/series/:id?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            404 - Serie não encontrada
        
        ### DELETE
            #### Requisição
            localhost:8000/series/:id?userId=<replace>&token=<replace>

            #### Erros
            401 - Não autorizado
            404 - Serie não encontrada

    ### USUARIO ###
        ### Modelo de Dado
            {
                name: { type: String, required: true },
                codigo: { type: Number, required: true, indexes: { unique: true } },
                senha: { type: String, required: true },
            }

         #### Requisição
            localhost:8000/users

            #### Erros
            500 - Erro ao buscar listagem de usuários
            #### Filtros
            skip: localhost:8000/users&skip=<replace> 
            limit: localhost:8000/users&limit=<replace> 
            name: localhost:8000/users&name=<replace>
       
        ### POST
            #### Requisição
            localhost:8000/users

            #### Erros
            422 - Campos inválidos
        
        ### PUT
            #### Requisição
            localhost:8000/users/:id

            #### Erros
              404 - Usuário não encontrado
       
        ### DELETE
            #### Requisição
            localhost:8000/users/:id
            
       #### Erros
       404 - Usuário não encontrado

    ### AUTENTICACAO ###
        ### Modelo de Dado
            {
                token: { type: String },
                user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            }

        ### POST
            #### Requisição
            localhost:8000/autenticacao

       #### Erros
       422 - Campos inválidos

## AUTENTICAÇÃO

Deve-se criar um usuário através da rota "/users". Depois, deve-se fazer uma requisição POST para a rota "/autenticacao" informando no BODY o ID do usuário. O retorno conterá um TOKEN que deverá ser utilizado em todas as rotas para garantir o acesso. Para acessar as rotas privadas, nos parametros utilizar ?userId=<$USER_ID>&token=<TOKEN>.
