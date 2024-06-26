import React, { useEffect, useState } from "react";
import "./styles.scss";
import ModalFindId from "../../component/ModalFindId";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const [findIdModalOn, setFindIdModalOn] = useState(false);

  useEffect(() => {
    if (id.length > 0 && pwValid) {
      setDisabledBtn(false);
      return;
    }
    setDisabledBtn(true);
  }, [id, pwValid]);

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePw = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleFindId = () => {
    setFindIdModalOn(true);
  };
  const handleFindPw = () => {
    alert("비번 찾기");
  };

  const handleClickLogin = () => {
    alert("로그인");
  };

  const handleClickSignUp = () => {
    alert("회원가입");
  };

  return (
    <div className="page">
      {/* <div className="logo"></div> */}
      <div className="title">회원 운동 관리 시스템</div>
      <div className="content">
        <div className="input-area">
          <li>
            {/* <img className="loginIcon" src={} /> */}
            <input
              className="input-id"
              type={"text"}
              alt="아이디를 입력해주세요"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={handleChangeId}
            />
          </li>
          <li>
            {/* <img className="loginIcon" src={} /> */}
            <input
              className="input-pw"
              type={"password"}
              alt="비밀번호를 입력해주세요"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handleChangePw}
            />
          </li>
          <li className="find-area">
            <div className="find-id" onClick={handleFindId}>
              아이디 찾기
            </div>
            <div className="find-pw" onClick={handleFindPw}>
              비밀번호 찾기
            </div>
          </li>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn-login"
            disabled={disabledBtn}
            onClick={handleClickLogin}
          >
            로그인
          </button>
          <button
            type="button"
            className="btn-signUp"
            disabled={disabledBtn}
            onClick={handleClickSignUp}
          >
            회원가입
          </button>
        </div>
        <div className="errorInputData">
          {id.length === 0 && <div>아이디를 입력해주세요</div>}
        </div>
        <div className="errorInputData">
          {!pwValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
          )}
        </div>
      </div>
      <ModalFindId
        show={findIdModalOn}
        onHide={() => setFindIdModalOn(false)}
      />
    </div>
  );
}
