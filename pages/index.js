import react from 'react';
import PageBtn from '../comps/PageBtn';
import Sliders from '../comps/Slider';
import Subheader from "../comps/Subheader";


export default function Home() {
  return (
    <div>
      <PageBtn />
      <div
        style={{margin: 10}}
      >
        <Sliders />
      </div>
    </div>
  )
}
