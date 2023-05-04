import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditUser.css";

export default function EditUser() {
  const links = [
    { label: "Home", link: "/" },
    { label: "FAQ", link: "/Faq" },
  ];
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const [name, setName] = useState(user.name);
  const [date, setDate] = useState(user.date);
  const [radio, setRadio] = useState({
    masculino: "Masculino"
  })

  const paginacao = useNavigate();

  // useEffect(() => {
  //   var elemento = document.getElementById(user.gender);
  //   console.log(elemento);
  //   elemento.checked = true;
  // }, []);

  function Logout() {
    localStorage.removeItem("loginUser");
    paginacao("/Home");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("asad", e);
    
    // let masculino = document.getElementById("Masculino");
    // let feminino = document.getElementById("Feminino");
    // let outros = document.getElementById("Outros");
    // let naobinario = document.getElementById("NaoBinario");
    // const arrayGender = [masculino, feminino, outros, naobinario];

    // const gender = arrayGender.filter((gender) => gender.checked);
    // console.log(gender[0].value);
    const body = {
      ...user,
      name,  
      date,
    };
    console.log("kahsbash",body);
    axios.put(`http://localhost:3000/users/${user.id}`, body).then((res) => {
      console.log(res);
      localStorage.removeItem("loginUser");
      localStorage.setItem("loginUser", JSON.stringify(body));
      paginacao("/home");
    });
  }
  return (
    <div className="container1">
      {" "}
      <Header links={links} />
      <div className="content">
        {" "}
        <div className="card1">
          <form onSubmit={handleSubmit} className="form" id="cadForm">
            <Input
              disable
              value={user.email}
              name="email"
              type="email"
              label="Email"
              placeholder="Insira seu e-mail."
              required
            />
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              label="Nome"
              placeholder="Insira seu e-mail."
              required
            />
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              name="name"
              type="date"
              label="Data"
              placeholder="Insira seu e-mail."
              required
            />

            <div className="radio">
              <div className="options_radio">
                <input
                  onClick={()=>setRadio({masculino:true
                  ,feminino:false,naobinario:false, outros:false})}
                  type="radio"
                  id="Masculino"
                  name="gender"
                  value="Masculino"
                />
                <label for="Masculino">Masculino</label>
              </div>
              <div className="options_radio">
                <input
                           onClick={()=>setRadio({masculino:false
                            ,feminino:true,naobinario:false, outros:false})}
                  type="radio"
                  id="Feminino"
                  name="gender"
                  value="Feminino"
                />
                <label for="Feminino">Feminino</label>
              </div>
              <div className="options_radio">
                <input
                           onClick={()=>setRadio({masculino:false
                            ,feminino:false,naobinario:true, outros:false})}
                  type="radio"
                  id="NaoBinario"
                  name="gender"
                  value="naoBinario"
                />
                <label for="NaoBinario">Não Binario</label>
              </div>
              <div className="options_radio">
                <input            onClick={()=>setRadio({masculino:false
                  ,feminino:false,naobinario:false, outros:true})} type="radio" id="Outros" name="gender" value="Outros" />
                <label for="Outros">Outros</label>
              </div>
            </div>
            <div className="button_submit_content">
              <button type="submit" className="button_submit">
                Editar
              </button>
            </div>
            <div className="button_submit_content">
              <button
                onClick={() => Logout()}
                type="submit"
                className="button_exit"
              >
                Sair
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
