import quotes from '../../utils/quotes.json';

export default function handler(req, res) {
    const quote = quotes.slice(0,10);
    res.status(200).json(quote);
}