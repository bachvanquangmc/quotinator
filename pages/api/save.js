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

// http://localhost:3000/saved/469c55d4-91fe-4428-8768-b78b42a53fef
// http://localhost:3000/saved/ce221021-fd4a-45a9-b765-bcdebdfa4df7
// http://localhost:3000/saved/c3b6e1c1-1d3d-438b-95b7-3cd39ae0323f
// http://localhost:3000/saved/e1013562-bc46-4d60-b9d3-254607890ba8