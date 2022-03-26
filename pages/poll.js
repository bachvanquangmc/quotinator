import react, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../comps/Navbar";
import router from "next/router";
import { useRouter } from "next/router";
import { useFav, useQuoteData } from "@/utils/provider";
import { v4 as uuidv4 } from "uuid";
import Btn from "@/comps/Btn";
import PollCard from "@/comps/PollCard";
import { io } from "socket.io-client";
import PollAleart from "@/comps/PollAleart";


import { useSBP } from "@/utils/provider";
import { useTxt } from "@/utils/provider";


const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  min-height: 100vh;
`;

const SubCont = styled.div`
  margin: 20px;
`;

const QuotCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Test = styled.div`
  flex-basis: 60%;
`;

const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100vw;
`;

const NavBarCont = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const Input = styled.input`
width: 100%;
height: 30px;
`

export default function Poll() {
  const [ load, setLoad ] = useState(true);
  const [mySoc, setMySoc] = useState(null)

  useEffect(()=>{

    setTimeout(()=>{
      setLoad(false);
    }, 1000);

    const socket = io('http://localhost:8888')

    setMySoc(socket)
    socket.emit('fav', fav)
    socket.on('received_fav',(fav)=>{
    setFav(fav)
    console.log('fav moi',fav)
    })
  }, []);

  const EmitToIO = async () => {
    if(mySoc !== null){
      mySoc.emit('user_ready')
      router.push('/vote')
    }
  }
  const router = useRouter();

  const { fav, setFav } = useFav();
  const { quoteData, setQuoteData } = useQuoteData({});
  const [poll, setPoll] = useState(false)
  const [pollDisplay, setPollDisplay] = useState("none")

  const StoreFav = (checked, obj)  => {
    console.log(checked, obj)
    if(checked){
      const new_fav = {
        ...fav,
      };
      new_fav[obj.Quote] = obj;
      setFav(new_fav);
    } else {
      const new_fav = {
        ...fav,
      };
      delete new_fav[obj.Quote];
      setFav(new_fav);
    }
  };


  if(load === true) {
    return <MainCont style={{background: 'rgba(0, 0, 0, 0.2)', height: '100wh' }}>
      <div >
        <NavBarCont >
          <Navbar />
        </NavBarCont>
      </div>
        <p style={{zIndex: 100}}>LOADING....</p>
    </MainCont>
  }

  return (
    <MainCont>
      <NavBarCont>
        <Navbar goBack={() => router.push("/")} />
      </NavBarCont>
      <PollAleart display={pollDisplay}/>
      <SubCont>
        <p>Type a question</p>
    
      </SubCont>
      
      <QuotCont>
        <Input type="text" placeholder="Which quote is better for an essay?"/>
        {fav && Object.values(fav).map((o, i) => (
          <>
          <PollCard
            poll={poll}
            key={i}
            text={o.Quote}
            subText={o.Author}
            checked={fav[o.Quote] !== undefined && fav[o.Quote] !== null}
            onChange={
            (e)=>StoreFav(e.target.checked, o)
          }
          />
          </>
          
        ))}
       
        <div>
          <Btn onClick={EmitToIO} text="Create Poll and Invite Participants"/>
        </div>
      </QuotCont>
    </MainCont>
  );
}
