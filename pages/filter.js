import React, { useState } from 'react';
import styled from 'styled-components';
import ax from 'axios';
import Navbar from '../comps/Navbar';
import Header from '../comps/Header';
import Subheader from '../comps/Subheader';
import TopicCard from '../comps/TopicCard';
import SearchBar from '../comps/SearchBar';
import Btn from '../comps/Btn';
import QuoteCard from '@/comps/QuoteCard';
import SortTab from '@/comps/SortTab';


import Switch from '../comps/Switch';
import { useRouter } from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    // background-color: #F2F0EE;
    height: 100%;
    padding: 5%;
`;

const TCMainCont = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

const CardCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px; */
    margin: 30px 40px 10px 0px;
`;

// const Filtering = async(options) => {
//     const res = ax.get('./api/quotes.json')
//     console.log(options)
// }

export default function Filter() {
    const [humor, setHumor] = useState(null)
    const [life, setLife] = useState(null)
    const [success, setSuccess] = useState(null)
    const [inspirational, setInspirational] = useState(null)
    const [religion, setReligion] = useState(null)
    const [love, setLove] = useState(null)
    const [philosophy, setPhilosophy] = useState(null)
    const [books, setBooks] = useState(null)
    const [death, setDeath] = useState(null)
    const [hope, setHope] = useState(null)
    const [wisdom, setWisdom] = useState(null)
    const [art, setArt] = useState(null)
    const [value, setValue] = useState(false);

    const [sbp, setSBP] = useState(false)
    const [sbp_type, setSBPType] = useState("asc")
    const [sba, setSBA] = useState(false)
    const [sba_type, setSBAType] = useState("asc")

    const [data, setData] = useState()
    const router = useRouter()
    const getQuotes = async() => {
       const res = await ax.get('./api/quotes', {
           params:{
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
                art:art,
                sort_popularity:sbp,
                sort_popularity_type:sbp_type,
                sort_author:sba,
                sort_author_type:sba_type
           }
       })
           console.log(res.data)
           setData(res.data)
    }

    return <MainCont>
    <Navbar/>

        <div className="switch">
            <Switch 
            isOn={value}
            handleToggle={()=>setValue(!value)}
            />
        </div>
        <Header header="Select a Category" />
        {/* <pre>{JSON.stringify(humor)}</pre>
        <pre>{JSON.stringify(life)}</pre>
        <pre>{JSON.stringify(success)}</pre> */}

        <SearchBar />
        <TCMainCont>
            {/* <CardCont onClick={()=> setOptions("humor")} > */}
            <CardCont onClick={()=> setHumor(humor ? null : "humor")}>
                <TopicCard text="Humor" src="/TopicCardIcons/humor.png" />
            </CardCont>
            <CardCont onClick={()=> setLife(life ? null : "life")}>
                <TopicCard text="Life" src="/TopicCardIcons/life.png" />
            </CardCont>
            <CardCont onClick={()=> setSuccess(success ? null : "success")}>
                <TopicCard text="Success" src="/TopicCardIcons/success.png" />
            </CardCont>
            <CardCont onClick={()=> setInspirational(inspirational ? null : "inspirational")}>
                <TopicCard text="Inspirational" src="/TopicCardIcons/inspirational.png" />
            </CardCont>
            <CardCont onClick={()=> setReligion(religion ? null : "religion")}>
                <TopicCard text="Religion" src="/TopicCardIcons/religion.png" />
            </CardCont>
            <CardCont onClick={()=> setLove(love ? null : "love")}>
                <TopicCard text="Love" src="/TopicCardIcons/love.png" />
            </CardCont>
            <CardCont onClick={()=> setPhilosophy(philosophy ? null : "philosophy")}>
                <TopicCard text="Philosophy" src="/TopicCardIcons/philosophy.png" />
            </CardCont>
            <CardCont onClick={()=> setBooks(books ? null : "books")}>
                <TopicCard text="Books" src="/TopicCardIcons/books.png" />
            </CardCont>
            <CardCont onClick={()=> setDeath(death ? null : "death")}>
                <TopicCard text="Death" src="/TopicCardIcons/death.png" />
            </CardCont>
            <CardCont onClick={()=> setHope(hope ? null : "hope")}>
                <TopicCard text="Hope" src="/TopicCardIcons/hope.png" />
            </CardCont>
            <CardCont onClick={()=> setWisdom(wisdom ? null : "wisdom")}>
                <TopicCard text="Wisdom" src="/TopicCardIcons/wisdom.png" />
            </CardCont>
            <CardCont onClick={()=> setArt(art ? null : "art")}>
                <TopicCard text="Art" src="/TopicCardIcons/art.png" />
            </CardCont>
            <Btn text='Continue' onClick={ getQuotes}/>
            <SortTab 
                setSBPType={setSBPType}
                setSBP={setSBP}
                sbp={sbp}
                sbp_type={sbp_type}
                setSBAType={setSBAType}
                setSBA={setSBA}
                sba={sba}
                sba_type={sba_type}
            />
           {data && (<div>
             {data.map((o, i) => (
          <div key={i}>
            <QuoteCard  text={o.Quote} subText={o.Author} />
          </div>
        ))}
        </div>)}
        </TCMainCont>

    </MainCont>
}