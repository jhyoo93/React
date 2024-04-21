import React, {useState} from "react";

const Input2 = () => {
    // 배열형태 opject 선언
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const {name, email, tel} = inputs; // opject 데이터 구조분해할당

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs, // inputs배열 안에 선언된 opject 데이터 가져옴
            [id]: value // 선언된 배열 데이터 id에 value값을 가져옴
        });
    };

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>  
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>      
    );
};

export default Input2;