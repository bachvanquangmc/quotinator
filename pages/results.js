import react, { useEffect, useState } from "react";
import styled from "styled-components";
import ax from "axios";
import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SearchBar from "../comps/SearchBar";
import SortTab from "../comps/SortTab";
import QuoteCard from "../comps/QuoteCard";
import PageBtn from "../comps/PageBtn";
import router from "next/router";
import { useRouter } from "next/router";
import { useData } from "@/utils/provider";
import { useFav, useQuoteData } from "@/utils/provider";
import { filtering } from "@/utils/func";
import { v4 as uuidv4 } from "uuid";
import Btn from "@/comps/Btn";
import Chat from '../comps/Chat';
import ChatIcon from '../comps/ChatIcon';
import PollAleart from "@/comps/PollAleart";
import { io } from "socket.io-client";




// import { Player } from '@lottiefiles/react-lottie-player';
import { useSBP } from "@/utils/provider";
import { useTxt } from "@/utils/provider";
import { set } from "react-hook-form";


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

export default function Results() {
  const [ load, setLoad ] = useState(true);

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


  const [curpage, setCurPage] = useState(1);
  const router = useRouter();

  const { fav, setFav } = useFav();
  const { quoteData, setQuoteData } = useQuoteData({});
  const {sbp, setSBP} = useSBP()
  const {txt, setTxt} = useTxt()
  const [poll, setPoll] = useState(false)
  const [pollDisplay, setPollDisplay] = useState("none")
  const [mySoc, setMySoc] = useState(null)


  const itemsPerPage = 10;
  var butt_arr = [];

  var start = 1;
  for (var i = 1; i < 2000; i += itemsPerPage) {
    butt_arr.push(((i-1) / itemsPerPage) + 1);
    start++;
  }

  butt_arr = butt_arr.slice(curpage - 3 < 0 ? 0 : curpage - 2, curpage + 4);

const nextPage = async (p) => {
  const res = await ax.get('api/quotes', {
    params: {
      txt:txt,
      page:p,
      num:itemsPerPage
    }
  })
  setQuoteData(res.data)
  setCurPage(p)
}
  const inputFilter = async (txt, p) => {
    console.log(txt);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (timer === null) {
      timer = setTimeout(async (p) => {
        // console.log("async call");
        const res = await ax.get("/api/quotes", {
          params: {
            txt: txt,
            sort_popularity:sbp,
           
          },
        });
        console.log(res.data);
        setData(res.data);
        timer = null;
      }, 500);
    }
  };


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
  const startPoll = () =>{
    setFav({})
    setPoll(true)
  }

  if(load === true) {
    return <MainCont style={{background: 'rgba(0, 0, 0, 0.2)', height: '100wh' }}>
      <div >
      {/* 
        <div>
          <Player
            lottieRef={instance => {
              setLot({ lot: instance }); // the lottie instance is returned in the argument of this prop. set it to your local state
            }}
            autoplay={true}
            loop={true}
            controls={false}
            src="/loader.json"
            style={{ height: '350px', width: '350px' }}
          ></Player>
        </div> */}
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
      <PollAleart display={pollDisplay} onClick={() => router.push("/vote")}/>
      <SubCont>
        <Header header="Search Your Quote" />
        <p style={{display:poll === false ? "inline-block" : "none"}} onClick={()=>startPoll()}>Want to start a poll? Click here!</p>
        <p style={{display:poll === true ? "inline-block" : "none"}}>Select quote(s) to vote</p>

        {/* <SearchBar onChange={(e) => inputFilter(e.target.value)} /> */}
    
      </SubCont>
      
      <QuotCont>
        {quoteData && Object.values(quoteData).map((o, i) => (
          <>
          {/* <div>{o.Quote}</div> */}
          <QuoteCard
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
       
         <BtnCont>
          {butt_arr.map((o, i) => (
            <div key={i}>
              <PageBtn 
              bgColor={o === curpage ? "#7b9582" : "white"}
              numColor={o === curpage ? "#fff" : "#000"}
              page_num={o}
              onclick={()=>nextPage(o)}/>
            </div>
          ))}
          {/* <button onClick={()=>nextPage(1)}>1</button> */}
        
        </BtnCont>
        <div style={{display:poll === false ? "inline-block" : "none"}} >
          <Btn onClick={()=>router.push(`/saved/${uuidv4()}`)} text="Go to Favorite"/>
        </div>
        <div style={{display:poll === true ? "inline-block" : "none"}} >
          <Btn onClick={()=>router.push(`/poll`)} text="Start Poll"/>
        </div>     
        {/* <button onClick={()=>router.push(`/saved/${uuidv4()}`)}>Go to fav</button> */}
      </QuotCont>
    </MainCont>
  );
}
