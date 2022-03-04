// save to mongodb instead
import {Save, Read} from '@/utils/helpers'

export default async function handler(req, res){
  if(req.method === "POST"){
    const {uuid, fav} = req.body
    console.log(uuid, fav)
    await Save(uuid, fav)
    res.status(200).json({name:"quang"})
  } else if(req.method === "GET"){
    const {uuid} = req.query
    try{
      const json = await import(`../../saves/${uuid}.json`)
      res.status(200).json(json)
    } catch (e){
      // can not find the import
      res.status(200).json(false)
    }
  }
}


