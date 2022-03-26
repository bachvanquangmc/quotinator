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
import Header from "@/comps/Header";


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

export default function Vote() {
  const [ load, setLoad ] = useState(true);
  const [mySoc, setMySoc] = useState(null)

  useEffect(()=>{

    setTimeout(()=>{
      setLoad(false);
    }, 1000);

    const socket = io('http://localhost:8888')
    socket.on('joined', (id)=>{
      setPollDisplay("inline-block")
    })

    setMySoc(socket)
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

  const sendCount = () =>{
    mySoc.emit('count', count)
  }
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
      <Header header="Vote" />
        <p>Which quote is better for an essay?</p>
    
      </SubCont>
      
      <QuotCont>
        {fav && Object.values(fav).map((o, i) => (
          <>
          <PollCard
          onClick={sendCount}
        
            num="inline-block"
            img="none"
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
          <Btn onClick={EmitToIO} text="Close Poll"/>
        </div>
      </QuotCont>
    </MainCont>
  );
}
