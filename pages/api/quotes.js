import quotes from '../../utils/quotes.json';
import {filtering} from '../../utils/func'
export default function handler(req, res) {

    var lists =[]
    const {humor, life, success, inspirational, religion, love, philosophy, books, death, hope, wisdom, art} = req.query
    // const quote = quotes.slice(0,10);
    if(humor || life || success || inspirational || religion || love || philosophy || books || death || hope || wisdom || art){
        lists = filtering(quotes, {
            humor:humor,
            life:life,
            success:success,
            inspirational:inspirational, 
            religion:religion, 
            love:love, 
            philosophy:philosophy, 
            books:books, 
            death:death, 
            hope:hope, 
            wisdom:wisdom, 
            art:art
        })
    }
    lists = lists.slice(0,20)
    res.status(200).json(lists);
}