import 'dotenv/config';

import { OpenAI } from "langchain/llms/openai";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIChatMessage, HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { systemMesssage } from './prompts.js'

const { API_VERSION, API_KEY, DEPLOYMENT, HOSTNAME, MODEL, EMBEDDINGS } = process.env;

export const loadDocumentQAJson = async () => {
    
    const loader = new JSONLoader(
        "./financeJson/Cleaned_date.json",
        ["/instruction", "/input","/output", "/text"]
      );
      
    const documentsAll = await loader.load();

    console.log('completed json document loading', documentsAll.length);
    
    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: API_KEY,
        modelName: EMBEDDINGS,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: EMBEDDINGS,
        batchSize: 1
    });

    console.log('embeddings', embeddings);

    const documents = documentsAll.slice(0,10);
    console.log('documents', documents);
    const vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);
    return RetrievalQAChain.fromLLM(new OpenAI({
        temperature: 0,
        modelName: MODEL,
        openAIApiKey: API_KEY,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: DEPLOYMENT
    }), vectorStore.asRetriever(), { returnSourceDocuments: false });
};

export const askGPTJson = async (question, originalAnswer) => {
    const chat = new ChatOpenAI({
        temperature: 0,
        modelName: MODEL,
        openAIApiKey: API_KEY,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: DEPLOYMENT
    });
    const response = await chat.call([
        new SystemChatMessage(systemMesssage),
        new HumanChatMessage(question),
        new AIChatMessage(originalAnswer),
    ]);

    return response;
}
