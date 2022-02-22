import quotes from '../../utils/quotes.json';
import { GoToPage, filtering, sorting, searching } from '../../utils/func';

export default function handler(req, res) {
  
    var lists = []
    const {sort_popularity, sort_popularity_type, sort_author, sort_author_type} = req.query
 
  const {humor, life, success, inspirational, religion, love, philosophy, books, death, hope, wisdom, art, txt} = req.query

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
    if(sort_author){
      lists = sorting(lists, {
        key:"Author",
        type:sort_author_type
      })
      console.log(lists)
    }      
    if(sort_popularity){
      lists = sorting(lists, {
        key:"Popularity",
        type:sort_popularity_type
      })
      console.log(lists)
    
 
 
        lists = lists.slice(0,10)
    }

    if(txt){
        lists = searching(quotes, {
            Quote: txt,
        })
        // if(req.query.page) {
        //     const num = req.query.num || 10;
        //     lists = GoToPage(quotes, req.query.page, 10);
        // }
        // const num = req.query.num || 10;
        // lists = GoToPage(quotes, req.query.page, 10);
        lists = lists.slice(0,10)
    }
    lists = lists.map((o,i)=>{
    return {
        ...o, id:i,
        
    }
})

res.status(200).json(lists);
}