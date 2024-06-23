import "./App.css";
import Box from "./component/Box";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PanToolIcon from "@mui/icons-material/PanTool";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useEffect, useState } from "react";

// 1. you box1, computer box1, 결과값 box1
// 2. 가위, 바위, 보 버튼을 클릭하면 클릭한 값이 박스에 보임
// 3. 가위, 바위, 보 버튼을 클릭하면 컴퓨터는 랜덤한 값을 뽑아와서 컴퓨터 박스에 그린다.
// 4. 2,3번을 비교한다.
// 5. 결과 박스에 결과를 표기한다.
// 6. 이기면 테두리가 초록색, 지면 테두리가 빨강, 비기면 검정색

// 가위바위보 정보 객체
const choice = {
    scissor: {
        name: "scissor",
        img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
    },
    rock: {
        name: "rock",
        img: "https://thumb.photo-ac.com/f5/f51c9569e9602dad2dc73231ac21fd5e_t.jpeg",
    },
    paper: {
        name: "paper",
        img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_BD030450290C2E8F769E16352FDFF090.jpg",
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(null);
    const [computerResult, setComputerResult] = useState(null);

    const play = (userChoice) => {
        // console.log("user choice:", userChoice);
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        // console.log("computer choice", computerChoice);
        setComputerSelect(computerChoice);
        setResult(makeResult(choice[userChoice], computerChoice));
    };

    useEffect(() => {
        if (result !== null) {
            setComputerResult(
                result === "Win" ? "Loose" : result === "Loose" ? "Win" : "tie"
            );
        }
    }, [result]);

    const makeResult = (user, computer) => {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "scissor") {
            return computer.name === "rock" ? "Loose" : "Win";
        } else if (user.name === "rock") {
            return computer.name === "scissor" ? "Win" : "Loose";
        } else if (user.name === "paper") {
            return computer.name === "rock" ? "Win" : "Loose";
        }
    };

    const randomChoice = () => {
        let randomArray = Object.keys(choice); //Object.keys : 객체의 키값을 뽑아서 array로 만들어줌
        // console.log("random Array", randomArray);
        let randomItem = Math.floor(Math.random() * randomArray.length); //0,1,2 랜덤 노출
        // console.log("computer randomItem", randomItem);
        let finalItem = randomArray[randomItem];
        // console.log("computer final item", finalItem);
        return choice[finalItem];
    };
    return (
        <>
            <div className="wrap">
                <Box title="You" item={userSelect} result={result} />
                <Box
                    title="Computer"
                    item={computerSelect}
                    result={computerResult}
                />
            </div>
            <div className="wrap">
                <button onClick={() => play("scissor")}>
                    <ContentCutIcon />
                    가위
                </button>
                <button onClick={() => play("rock")}>
                    <HandshakeIcon />
                    바위
                </button>
                <button onClick={() => play("paper")}>
                    <PanToolIcon />보
                </button>
            </div>
            <div className="wrap">결과:{result}</div>
        </>
    );
}

export default App;
