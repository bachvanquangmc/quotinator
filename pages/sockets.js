import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export default function Sockets() {
  const [mySoc, setMySoc] = useState(null);

  const [txt, setTxt] = useState("");

  const [msgs, setMsgs] = useState([]);

  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
  });

  const [users, setUsers] = useState({});

  useEffect(() => {
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });

    const socket = io("http://localhost:8888");
    // const socket =io("http://2d04-142-232-124-228.ngrok.io");

    socket.on("init_user", (users)=>{
      // set the user into the object so you store the users
      // console.log(users);
      setUsers(users);
    });

    socket.on("update_mouse", (x, y) => {
      setMousePos({
        left: x,
        top: y,
      })
    });

    socket.on("joined", (id, txt) => {
      // alert(`${id} has ${txt}`);

      // const new_msgs = [
      //   ...msgs;
      //   `${id} says ${txt}`
      // ];
      // setMsgs(new_msgs);

      setMsgs((prev) => [
        ...prev,
        `${id} says ${txt}`
      ]);
    })

    setMySoc(socket);
  }, [])

  const EmitToIO = async () => {
    //mySoc to emit
    if (mySoc !== null) {
      mySoc.emit("user_ready", txt);
    }
  }

  const EmitMouseMove = async (x, y) => {
    // console.log(x, y);

    // send the x,y over to server
    if(mySoc !== null){
      mySoc.emit('mouse_xy', x, y);
    }
  }

  const colors = ["green", "blue", "teal", "purple", "yellow"];


  return (
    <div style={{ height: '100vh' }}
      onMouseMove={(e) => EmitMouseMove(e.clientX, e.clientY)}>
      
      {Object.values(users).map((o,i)=>
      <div key = {i} style={{
        position: 'fixed',
        // left: mousePos.left,
        // top: mousePos.top,
        left: o.left,
        top: o.top,
        width: 10,
        height: 10,
        background:colors[i%5]
      }}></div>
      )}

      <input type="text" onChange={(e) => setTxt(e.target.value)} />
      <button onClick={EmitToIO}>Join and Alert</button>
      {msgs.map((o, i) => <div key={i} style={{ background: 'red', padding: 10 }}>
        {o}
      </div>)}
    </div>
  )
}



// io - main phone
// socket - individual phones
// create const to connect to the localhost 8888
// main phone is going to send msg