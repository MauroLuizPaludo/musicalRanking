const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

export async function gerarRanking(estilo: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "estou fazendo um aplicativo onde o usuário informa o estilo musical e quero que me retorne o ranking das 5 musicas mais tocadas em serviços de streaming deste estilo no ultimo mês no Brasil"
                },
                {
                    "role": "assistant",
                    "content": "Que projeto interessante!\n\nPara entrega o ranking das 5 músicas mais tocadas em serviços de streaming por estilo musical no Brasil, você precisará:\n\n1. **Obter os dados de streaming**: Você precisará encontrar uma fonte confiável que forneça os dados de streaming para o Brasil. Algumas opções incluem:\n\t* Institutum Iovene (Instituto das Comunicações Sociais e do Instituto de Economia da Universidade de São Paulo);\n\t* Brasil Câmara Brasil (federação de associações de comunicação);\n\t* Digital Music News;\n\t* Midia Research;\n\t* ou outras fontes governamentais ou de mercado.\n2. **Preparar os dados**: Depois de obter os dados, você precisará prepará-los para a análise. Isso pode incluir:\n\t* Filtrear os dados para incluir apenas os estilos musicais relevantes;\n\t* Converter os dados em um formato manipulável (e.g., CSV);\n\t* Tratar os dados para remover informações desnecessárias e uniformizar a formatação.\n3. **Analisar os dados**: Agora, você precisará analisar os dados para encontrar as 5 músicas mais tocadas por estilo musical no Brasil. Isso pode ser feito utilizando ferramentas de análise de dados, como:\n\t* Excel;\n\t* Google Sheets;\n\t* Python com bibliotecas como Pandas e NumPy;\n\t* R com bibliotecas como dplyr e tidyr.\n\nUma abordagem possível é utilizar a técnica de \"join\" para combinar os dados dos estilos musicais com os dados de streaming. Por exemplo, se você tiver um banco de dados com os estilos musicais e um outro banco de dados com os dados de streaming, você pode joined-los por um campo comum (e.g., \"estilo_musical_id\").\n\n4. **Ranking as 5 músicas**: Depois de ter combinado e analisado os dados, você pode criar um ranking das 5 músicas mais tocadas por estilo musical no Brasil. Isso pode ser feito utilizando a técnica de ordenação (ordenar os dados pela coluna de streaming e pegar as 5 primeiras linhas).\n\nAqui está um exemplo de como você pode implementar isso em Python utilizar bibliotecas como Pandas e NumPy:\n```python\nimport pandas as pd\n\n# Carregue os dados dos estilos musicais\nestilos_musicais = pd.read_csv('estilos_musicais.csv')\n\n# Carregue os dados de streaming\nstreaming_data = pd.read_csv('streaming_data.csv')\n\n# Join os dados dos estilos musicais com os dados de streaming\ndata_joined = pd.merge(estilos_musicais, streaming_data, on='estilo_musical_id')\n\n# Agregue as músicas por estilo musical e ordene pelo número de streams\nranking_musicas = data_joined.groupby('estilo_musical')['streams'].sum().sort_values(ascending=False).head(5)\n\nprint(ranking_musicas)\n```\nLembre-se de que a precisão dos resultados pode variar dependendo da qualidade dos dados e da técnica utilizada para análise. Além disso, você também deve considerar a possibilidade de um vazante de dados ou erros de manipulação de dados.\n\nEspero que isso ajude!"
                },
                {
                    "role": "user",
                    "content": "quero te enviar somente o estilo musical, e vocâ irá me retornar o ranking"
                },
                {
                    "role": "assistant",
                    "content": "Excelente escolha!\n\nPor favor, forneça o estilo musical que você deseja obter o ranking, e eu farei o meu melhor para fornecer as 5 músicas mais tocadas no Brasil por esses estilos musicais no último mês.\n\nLembre-se de que esses dados são baseados em fontes públicas e podem ter algum erro de precisão.\n\nQual é o estilo musical que você deseja?"
                },
                {
                    "role": "user",
                    "content": "me retorne somente o ranking, sem informações adicionais"
                },
                {
                    "role": "assistant",
                    "content": "1. \"Eu Quero Tanto Um Corpo\" - Gusttavo Lima (10,433,819 streams)\n2. \"Insensatez\" - Jorge & Mateus (8,461,219 streams)\n3. \"Deixa Eu Querer\" - Jorge & Mateus (7,921,819 streams)\n4. \"Sogra\" - Gusttavo Lima (7,441,119 streams)\n5. \"Você Não Vale Nada\" - Jorge & Mateus (7,261,819 streams)"
                },
                {
                    "role": "user",
                    "content": estilo
                },
            ],
            "model": "llama3-8b-8192",
            "temperature": 0.5,
            "max_tokens": 500,
        });

        return chatCompletion.choices[0]?.message?.content;
    } catch (error) {
        return "Não foi possível carregar o ranking :("
    }
}


