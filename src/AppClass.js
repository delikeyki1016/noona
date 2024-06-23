import React, { Component } from "react";

import "./App.css";
import BoxClass from "./component/BoxClass";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PanToolIcon from "@mui/icons-material/PanTool";
import HandshakeIcon from "@mui/icons-material/Handshake";

// 0. 가위바위보게임 클래스형으로 변환하기
// 1. you box1, computer box1, 결과값 box1
// 2. 가위, 바위, 보 버튼을 클릭하면 클릭한 값이 박스에 보임
// 3. 가위, 바위, 보 버튼을 클릭하면 컴퓨터는 랜덤한 값을 뽑아와서 컴퓨터 박스에 그린다.
// 4. 2,3번을 비교한다.
// 5. 결과 박스에 결과를 표기한다.
// 6. 이기면 테두리가 초록색, 지면 테두리가 빨강, 비기면 검정색
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

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: null,
            computerResult: null,
        };
    }

    play = (yourChoice) => {
        let computerChoice = this.random();
        this.setState({
            userSelect: choice[yourChoice],
            computerSelect: choice[computerChoice],
            result: this.judgement(choice[yourChoice], choice[computerChoice]),
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.result !== this.state.result &&
            this.state.result !== null
        ) {
            this.setState({
                computerResult:
                    this.state.result === "win"
                        ? "lose"
                        : this.state.result === "lose"
                        ? "win"
                        : "tie",
            });
        }
    }

    random = () => {
        let randomArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * randomArray.length);
        let finalItem = randomArray[randomItem];
        return finalItem;
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "rock")
            return computer.name === "scissor" ? "win" : "lose";
        else if (user.name === "scissor")
            return computer.name === "paper" ? "win" : "lose";
        else if (user.name === "paper")
            return computer.name === "rock" ? "win" : "lose";
    };

    render() {
        return (
            <>
                <div className="wrap">
                    <BoxClass
                        title="You"
                        item={this.state.userSelect}
                        result={this.state.result}
                    />
                    <BoxClass
                        title="Computer"
                        item={this.state.computerSelect}
                        result={this.state.computerResult}
                    />
                </div>
                <div className="wrap">
                    <button onClick={() => this.play("scissor")}>
                        <ContentCutIcon />
                        가위
                    </button>
                    <button onClick={() => this.play("rock")}>
                        <HandshakeIcon />
                        바위
                    </button>
                    <button onClick={() => this.play("paper")}>
                        <PanToolIcon />보
                    </button>
                </div>
                <div className="wrap">결과: {this.state.result}</div>
            </>
        );
    }
}
