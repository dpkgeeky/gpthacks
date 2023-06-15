import 'dotenv/config';

import { OpenAI } from "langchain/llms/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIChatMessage, HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { systemMesssage } from './prompts.js'

const { API_VERSION, API_KEY, DEPLOYMENT, HOSTNAME, MODEL, EMBEDDINGS } = process.env;

export const loadDocumentQA = async () => {
    const paths = [
        //'./pdf/TC.pdf',
        //'./pdf/HSBC-Codes.pdf',
        './pdf/EmiratesNBD_BB_Schedule_of_charges.pdf'
    ];

    let documents = []
    for (const path of paths) {
        const loader = new PDFLoader(path);
        const pages = await loader.loadAndSplit();
        documents = [...documents, ...pages]
    }
    
    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: API_KEY,
        modelName: EMBEDDINGS,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: EMBEDDINGS,
        batchSize: 1
    });

    // console.log(documents)
    const vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);
    return RetrievalQAChain.fromLLM(new ChatOpenAI({
        temperature: 0,
        modelName: MODEL,
        openAIApiKey: API_KEY,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: DEPLOYMENT
    }), vectorStore.asRetriever(), { returnSourceDocuments: false });
};

export const askGPT = async (question, originalAnswer) => {
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
