import quotes from '../../utils/quotes.json';
import { GoToPage, filtering } from '../../utils/func';

export default function handler(req, res) {
    
    
    // var lists = null;
    // if(req.query.page) {
    //     const num = req.query.num || 10;
    //     lists = GoToPage(quotes, req.query.page, 10);
    // }

    
    // lists = lists.map((o,i)=>{
    //     return {
    //         ...o, id:i
    //     }
    // })
    var lists = []
    const {txt, sort_rating} = req.query
    if(txt){
        lists = filtering(quotes, {
          humor:txt
        })
      }
 
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