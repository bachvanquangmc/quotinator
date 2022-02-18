
export function GoToPage(qts=[], page=1, num=5){
    const results = qts.slice((page-1)*num, page*num);
    console.log(results);
    return(results);
}

export function filtering(
    arr = [],
    config = {humor:null, life:null, success:null, inspirational:null, religion:null, love:null, philosophy:null, books:null, death:null, hope:null, wisdom:null, art:null}
){
  const {humor, life, success, inspirational, religion, love, philosophy, books, death, hope, wisdom, art} = config

  if(humor || life || success || inspirational || religion || love || philosophy || books || death || hope || wisdom || art){
    const filtered_arr = arr.filter((o) => {
        var cond = true

      if(humor){
        cond = cond && o.Tags.includes(humor)
      }
      if(life){
        cond = cond && o.Tags.includes(life) 
      }
      if(success){
        cond = cond && o.Tags.includes(success) 
      }
      if(inspirational){
        cond = cond && o.Tags.includes(inspirational) 
      }
      if(religion){
        cond = cond && o.Tags.includes(religion) 
      }
      if(love){
        cond = cond && o.Tags.includes(love) 
      }
      if(philosophy){
        cond = cond && o.Tags.includes(philosophy) 
      }
      if(books){
        cond = cond && o.Tags.includes(books) 
      }
      if(death){
        cond = cond && o.Tags.includes(death) 
      }
      if(hope){
        cond = cond && o.Tags.includes(hope) 
      }
      if(wisdom){
        cond = cond && o.Tags.includes(wisdom) 
      }
      if(art){
        cond = cond && o.Tags.includes(art) 
      }
        return cond
    })
    // console.log(filtered_arr)
    return filtered_arr
  } else {
    return []
  }

  }

const quotes = require('./quotes.json')

// filtering(quotes, {humor:"humor", life:"life"})

