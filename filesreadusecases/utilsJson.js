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
      
    let startTime = new Date();
    const documentsAll = await loader.load();

    console.log('completed json document loading - time taken - ' + timediffrence(startTime) + ' ms', documentsAll.length);
    
    startTime = new Date();
    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: API_KEY,
        modelName: EMBEDDINGS,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: EMBEDDINGS,
        batchSize: 1
    });

    console.log('embeddings generated - time taken - ' + timediffrence(startTime) + ' ms',);

    startTime = new Date();
    const documents = documentsAll.slice(0,100);
    console.log('documents sliced - time taken - ' + timediffrence(startTime) + ' ms');
    startTime = new Date();
    const vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);
    console.log('vectors generated - time taken - ' + timediffrence(startTime) + ' ms');
    startTime = new Date();
    const retrievalQAChain = RetrievalQAChain.fromLLM(new ChatOpenAI({
        temperature: 0,
        modelName: MODEL,
        openAIApiKey: API_KEY,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: DEPLOYMENT
    }), vectorStore.asRetriever(), { returnSourceDocuments: false });

    console.log('RetrievalQAChain generated - time taken - ' + timediffrence(startTime) + ' ms');
    return retrievalQAChain;
};

export const askGPTJson = async (question, originalAnswer) => {
    console.log('askGPTJson initiated');
    let startTime = new Date();
    const chat = new ChatOpenAI({
        temperature: 0,
        modelName: MODEL,
        openAIApiKey: API_KEY,
        azureOpenAIApiVersion: API_VERSION,
        azureOpenAIApiKey: API_KEY,
        azureOpenAIApiInstanceName: HOSTNAME,
        azureOpenAIApiDeploymentName: DEPLOYMENT
    });
    console.log('ChatOpenAI generated - time taken - ' + timediffrence(startTime) + ' ms');
    startTime = new Date();
    const response = await chat.call([
        new SystemChatMessage(systemMesssage),
        new HumanChatMessage(question),
        new AIChatMessage(originalAnswer),
    ]);
    console.log('Response generated - time taken - ' + timediffrence(startTime) + ' ms');

    return response;
}

function timediffrence(timestamp1) {
    var difference = (new Date()) - timestamp1;
    var daysDifference = Math.floor(difference);

    return daysDifference;
}