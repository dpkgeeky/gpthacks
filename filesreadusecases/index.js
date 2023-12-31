import 'dotenv/config';
import cors from 'cors'
import express, { Router } from 'express';
import { loadDocumentQA, askGPT } from './utilsPDF.js';
// import { loadDocumentQAJson, askGPTJson } from './utilsJson.js';

const app = express();
const router = Router();
app.use(express.json());
app.use(cors())
console.log('Loading the pdf document...');

const QA = await loadDocumentQA();
// console.log('Loading the json document...');

// const QAJson = await loadDocumentQAJson();

router.post('/ask', async (req, res, next) => {
    try {
        let question = req.body.question;
        let { text: originalAnswer } = await QA.call({ query: question });
        originalAnswer = originalAnswer.trim();
        const {text: gptResponse} = await askGPT(question, originalAnswer)
        console.log("GPT Response:", gptResponse)
        res.json(JSON.parse(gptResponse));
    } catch (error) {
        res.json({ "response": "An agent will answer soon.", "language": "Unknown" })
        next(error);
    }

});

// router.post('/askFinance', async (req, res, next) => {
//     try {
//         let question = req.body.question;
//         let { text: originalAnswer } = await QAJson.call({ query: question });
//         originalAnswer = originalAnswer.trim();
//         const {text: gptResponse} = await askGPTJson(question, originalAnswer)
//         console.log("GPT Response:", gptResponse)
//         res.json(JSON.parse(gptResponse));
//     } catch (error) {
//         console.log('error', error);
//         res.json({ "response": "An agent will answer soon.", "language": "Unknown" })
//         next(error);
//     }

// });

app.use('/api', router);

app.listen(3000, () => console.log('Server running on port 3000'));