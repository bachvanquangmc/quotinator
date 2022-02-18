import quotes from '../../utils/quotes.json';
import { GoToPage } from '../../utils/func';

export default function handler(req, res) {
    
    
    var lists = null;
    if(req.query.page) {
        const num = req.query.num || 10;
        lists = GoToPage(quotes, req.query.page, 10);
    }

    
    lists = lists.map((o,i)=>{
        return {
            ...o, id:i
        }
    })
    res.status(200).json(lists);
}